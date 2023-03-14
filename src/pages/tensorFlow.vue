<template>
  <section class="flex w-full">
    <div class="mx-auto">
        <div class="mt-10">
            <h1 class="text-4xl font-semibold text-purple-800">Tensorflow Object detection</h1>
          <div class="mt-5">
            <div class="flex mb-5">
              <div class="mx-auto">
                <div v-if="!isStreaming">
             <button type="button" @click="openCamera" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-lg px-5 mt-8 py-2 mb-1">
             Open Camera
                </button>
                </div>
                <div v-else>
             <button type="button"  @click="stopStreaming" class="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-lg px-5 mx-4 mt-8 py-2 mb-1">
            Stop Streaming
                </button>
             <button type="button"  @click="snapshot" class="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-lg px-5 mt-8 py-2 mb-1">
           Snapshot
                </button>
                </div>
              </div> 
              </div> 
              <div class="mb-5">
                <video ref="videoRef" src="" autoplay="true" width="300"></video>
              </div>
              <div>
                                        <img ref="imgRef" src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg" width="500" height="500" alt="" crossorigin="anonymous">
              </div>
              <div class="flex">
              <div class="mx-auto">
                <button type="button" @click="detect" class="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-lg px-5 mt-8 py-2 mb-1">
                <span v-if="isLoading">Loading.....</span>
                <span v-else>Detect Object</span>
                </button>
                <div class="" v-if="result.length>0">
              <p class="text-3xl font-medium">
                {{ result[0].class }}
              </p>
            </div>
              </div>
            </div>
                      </div>
          </div>
    </div>
  </section>
</template>

<script>
import { ref} from 'vue'
  require('@tensorflow/tfjs-backend-cpu')
    require('@tensorflow/tfjs-backend-webgl')
    const cocoSsd = require('@tensorflow-models/coco-ssd')
export default {
    setup() {
    const imgRef = ref('')
    const videoRef = ref('')
    const isStreaming = ref(false)
    const result = ref([])
    const isLoading = ref(false)
        
    async function detect() {
      const img = imgRef.value;
      isLoading.value = true;

           const model = await cocoSsd.load()
           const predictions = await model.detect(img)
      result.value = predictions;

      isLoading.value = false;
   }

    async function openCamera() {
      if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cams = devices.filter((device) => device.kind == "videoinput");
        const camID = cams[0].deviceId;
        navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: camID } } }).then((stream) => {
          isStreaming.value = true;
          videoRef.value.srcObject = stream;
      })
    }
    }

   function stopStreaming() {
  const stream = videoRef.value.srcObject;
  const tracks = stream.getTracks();
     tracks.map((track) => track.stop());
  isStreaming.value = false;
    }

    function snapshot() {
  const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
  ctx.drawImage(videoRef.value, 0, 0, 200, 200);
  const data = canvas.toDataURL("image/png");
  imgRef.value.setAttribute("src", data);
    }

    
          return{imgRef, result, detect, isLoading, videoRef, openCamera, isStreaming, stopStreaming, snapshot}
}
}
</script>

<style>

</style>