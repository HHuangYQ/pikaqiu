(function(){var n=50;$(".actions").on("click","button",(function(e){let t=$(e.currentTarget),o=t.attr("data-speed");switch(t.addClass("active").siblings(".active").removeClass("active"),o){case"slow":n=100;break;case"normal":n=50;break;case"fast":n=10}}));!function(e,t,o){let r,i=document.querySelector("#code"),p=document.querySelector("#styleTag"),a=0;r=setTimeout((function e(){a+=1,i.innerHTML=t.substring(0,a),p.innerHTML=t.substring(0,a),i.scrollTop=i.scrollHeight,a<t.length?r=setTimeout(e,n):o&&o.call()}),n)}(0,"/*\n * 首先，需要准备皮卡丘的皮\n */\n.preview{\n  background: #FEE433;\n}\n/*\n * 接下来，画皮卡丘的鼻子\n */\n.nose{\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 12px;\n  border-color: black transparent transparent;\n  border-radius: 11px;\n  position: absolute;\n  left: 50%;\n  top: 28px;\n  margin-left: -12px;\n}\n/*\n * 接下来，画皮卡丘的眼睛\n */\n.eye{\n  width: 49px;\n  height: 49px;\n  background: #2E2E2E;\n  position: absolute;\n  border-radius: 50%;\n  border: 2px solid #000000;\n}\n/*\n * 眼睛里面的珠子\n */\n.eye::before{\n  content: '';\n  display: block;\n  width: 24px;\n  height: 24px;\n  background: white;\n  position: absolute;\n  border-radius: 50%;\n  left: 6px;\n  top:-1px;\n  border: 2px solid #000;\n}\n/*\n * 左眼在左边（废话）\n */\n.eye.left{\n  right: 50%;\n  margin-right: 90px;\n}\n/*\n * 右眼在右边（废话）\n */\n.eye.right{\n  left: 50%;\n  margin-left: 90px;\n}\n/*\n * 然后，画皮卡丘的脸\n */\n.face{\n  width: 68px;\n  height: 68px;\n  background: #FC0D1C;\n  border: 2px solid black;\n  border-radius: 50%;\n  position: absolute;\n  top: 85px;\n}\n/*\n * 将脸放到正确的位置\n */\n.face.left{\n  right: 50%;\n  margin-right: 116px;\n}\n.face.right{\n  left: 50%;\n  margin-left: 116px;\n}\n/*\n * 上嘴唇\n */\n.upperLip{\n  height: 25px;\n  width: 80px;\n  border: 2px solid black;\n  position: absolute;\n  top: 50px;\n  background: #FDE348;\n}\n.upperLip.left{\n  right: 50%;\n  border-bottom-left-radius: 40px 25px;\n  border-top: none;\n  border-right: none;\n  transform: rotate(-20deg);\n}\n.upperLip.right{\n  left: 50%;\n  border-bottom-right-radius: 40px 25px;\n  border-top: none;\n  border-left: none;\n  transform: rotate(20deg);\n}\n/*\n * 下嘴唇\n */\n.lowerLip-wrapper{\n  bottom: 0;\n  position: absolute;\n  left: 50%;\n  margin-left: -150px;\n  height: 110px;\n  overflow: hidden;\n  width: 300px;\n}\n.lowerLip{\n  height: 3500px;\n  width: 300px;\n  background: #990513;\n  border-radius: 200px/2000px;\n  border: 2px solid black;\n  position: absolute;\n  bottom: 0;\n  overflow: hidden;\n}\n/*\n * 小舌头\n */\n.lowerLip::after{\n  content: '';\n  position: absolute;\n  bottom: -20px;\n  width: 100px;\n  height: 100px;\n  background: #FC4A62;\n  left: 50%;\n  margin-left: -50px;\n  border-radius: 50px;\n}\n/*\n * 好了，这只皮卡丘送给你\n */\n")}).call();
//# sourceMappingURL=index.a9aa3735.js.map
