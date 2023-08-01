from fastapi import FastAPI, HTTPException , UploadFile , File
from model import FaceSwapper
import json
import base64
import cv2
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

# # Add CORS middleware with appropriate configurations
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],  # You can restrict the allowed HTTP methods if necessary
    allow_headers=["*"],  # You can specify specific allowed headers if needed
    allow_credentials=True,  # Set this to True if your frontend sends credentials (e.g., cookies) with requests  
)
@app.get("/api/python")
def python():
    return "<p>asdfasf, World!</p>"

image_swapper = FaceSwapper("./model_source/inswapper_128.onnx")



@app.post('/api/swap-image')
async def swap_image(face_to_swap: UploadFile = File(...), real_image: UploadFile = File(...)):
    try:
        print("got images")
        face_bytes = await face_to_swap.read()
        real_bytes = await real_image.read()
        print("changed it to bytes")

        # Convert the bytes to numpy arrays
        face_to_swap_array = cv2.imdecode(np.frombuffer(face_bytes, np.uint8), cv2.IMREAD_COLOR)
        real_image_array = cv2.imdecode(np.frombuffer(real_bytes, np.uint8), cv2.IMREAD_COLOR)

        base64_image = image_swapper.swap_image_from_request(face_to_swap_array, real_image_array)
        print("Got Base 64 Image")
        if base64_image is None:
            error_msg = "Image swapping failed. Sorry. We will fix it soon."
            return JSONResponse(status_code=400, content={"error": error_msg})
        
        return JSONResponse(content={"result_image": base64_image}, status_code=200)

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})