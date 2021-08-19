$(function(){ 
    var btnchoose=document.querySelector('#btnchoose');

    btnchoose.addEventListener('click',function(){ 
        $('#file').click();
    })

    $('#file').on('change',function(e){ 
        var files=e.target.files;//或群用户选择的文件

        if(files.length===0){ 
            return layui.layer.msg('请选择照片！！');
        }
        var file = e.target.files[0];
        //const arrayBuffer = file;
        //console.log(file)
        var newImgURL = URL.createObjectURL(file);
        //const tiff = new Tiff({buffer: arrayBuffer});
        //console.log(tiff)
        //const imgData = tiff.toDataURL();
        document.querySelector('#image').src=newImgURL;
        //console.log(newImgURL)
    });
    var btnupdate=document.querySelector('#update');

    btnupdate.addEventListener('click',function(){ 
       //从后台得到处理后的图片的url并显示，因没有后台数据就先用settimeout模拟]
      var btns=document.querySelectorAll('.layui-btn');
      var that=null;
      for(var j=0;j<btns.length;j++){
          
          that=btns[0];
          btns[j].addEventListener('mousedown',function(){
              
              this.style.backgroundColor='#009688';
              if(that!==this){
              that.style.backgroundColor='#1E9FFF'
              that=this;
              var pic=that.getAttribute('data-id');
              document.querySelector('#result').src='img/'+pic+'.jpg';
              }
              


          })
      }
       setTimeout(function(){
        //var reader = new FileReader();
        // 通过四种方式读取文件
        //var image=new Image();
        //image.crossOrigin = 'anonymous';
        //image.src='http://127.0.0.1:5500/%E7%89%9B/img/%E7%BB%93%E6%9E%9C.jpg';
        //var base64=getBase64Image(image);
        //console.log(base64.dataURL)
        //document.querySelector('#result').src=base64.dataURL;
        //var blob=convertBase64UrlToBlob(base64);
        //console.log(base64);
       // reader.readAsDataURL(blob);   
        //reader.onload = function(e){
            //查看文件输出内容
            //console.log(this.result);
            //查看文件内容字节大小
            //console.log(new Blob([this.result]))
            btns[0].style.backgroundColor='#009688';
            document.querySelector('#result').src='img/1.jpg';
        }
    ,3000);
        } 
          
)


    /**  
       * 将以base64的图片url数据转换为Blob  
       * @param urlData  
       * 用url方式表示的base64图片数据  
       */  
     function convertBase64UrlToBlob(base64){ 
        var urlData =  base64.dataURL;
        var type = base64.type;
        var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte
        //处理异常,将ascii码小于0的转换为大于0  
        var ab = new ArrayBuffer(bytes.length);  
        var ia = new Uint8Array(ab);  
        for (var i = 0; i < bytes.length; i++) {  
            ia[i] = bytes.charCodeAt(i);  
        }  
        return new Blob( [ab] , {type : type});  
      }
      /* 
       * 图片的路径地址 转换成base64编码 如下代码： 
       */
      function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
        var dataURL = canvas.toDataURL("image/"+ext);
        return {
          dataURL: dataURL,
          type: "image/"+ext
        };
      }

      
    
})