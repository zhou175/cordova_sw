/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // 获取id的函数
    $: function(id) {
        return document.getElementById(id);
    },

    // Update DOM on a Received Event
    receivedEvent: function() {
        var cameraButton = this.$('openCamera');
        var _this = this; // this表示当前对象，_this表示cameraButton对象
        cameraButton.onclick = function() {
            // 打开图片库
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50, // 相片质量是50
                sourceType: Camera.PictureSourceType.CAMERA, // 设置从摄像头拍照获取
                destinationType: Camera.DestinationType.FILE_URI // 以文件路径返回
            });

            function onSuccess(imageURI) {
                var image = _this.$('img');
                // var text = _this.$('text');
                image.src = imageURI;
                // text.innerHTML = imageURI.substr(imageURI.lastIndexOf('/') + 1);
            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }
        }
    }
};
app.initialize();