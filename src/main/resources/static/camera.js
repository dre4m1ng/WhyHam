// 비디오 및 캔버스 요소를 선택합니다.
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');

// 브라우저에서 카메라에 접근할 수 있는지 확인합니다.
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.srcObject = stream;
        video.play();
    }).catch(function(error) {
        console.error("카메라 접근 오류: ", error);
    });
} else {
    alert('브라우저에서 카메라를 지원하지 않습니다.');
}

// 캡처 버튼 클릭 이벤트 리스너
captureButton.addEventListener('click', function() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/png');
    console.log('캡처된 이미지 데이터 URL:', dataURL);
    // 캡처된 이미지를 이미지 요소에 표시하거나 서버로 전송하는 등의 작업을 할 수 있습니다.
});
