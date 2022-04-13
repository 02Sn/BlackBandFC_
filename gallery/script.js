//MENYELECK SEMUA ELEMEN YANG DI BUTUHKAN
const gallery = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img");
shadow = document.querySelector(".shadow");

window.onload = ()=>{//satu windows terload
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i; // Buat cek nilai variable
        let clickImgIndex;
        gallery[i].onclick = ()=>{
            clickImgIndex = newIndex;
            console.log(i);
            function preview(){
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src; //Mendapatkan penggguna yang nge click url gambar
                previewImg.src = selectedImgUrl; //Buat bisa nge click sesuai gambar
            }

            //Ayo kerjakan tombol sebelum dan selanjutnya 
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--;//desripsi nilai index baru
               if(newIndex == 0) {
                   preview();
                 prevBtn.style.display = "none";
               }else{
                   preview();//untuk memanggil beberapa fungsi untuk update gambar
                   nextBtn.style.display = "block";
               }
            }
            nextBtn.onclick = ()=>{
                newIndex++;//desripsi nilai index baru
               if(newIndex >= gallery.length - 1) {
                   preview();
                 nextBtn.style.display = "none";
               }else{
                   preview();//untuk memanggil beberapa fungsi untuk update gambar
                   prevBtn.style.display = "block";
               }
            }

            preview(); //memanggil fungsi
            previewBox.classList.add("show");
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";

            closeIcon.onclick = ()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        } 
    }
}