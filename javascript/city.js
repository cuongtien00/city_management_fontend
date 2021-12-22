showAllCities();
function showAllCities(){
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/cities",
        success: function (data){
            let content = '';
            for (let i = 0; i < data.length; i++) {
                content = '<div class="u-align-left u-container-style u-list-item u-radius-32 u-repeater-item u-shape-round u-white u-list-item-1">\n' +
                    '              <div class="u-container-layout u-similar-container u-container-layout-1"><span class="u-file-icon u-icon u-icon-1"><img src="'+data[i].image+'" alt=""></span><span class="u-file-icon u-icon u-icon-2"><img src="images/1827933.png" alt=""></span>\n' +
                    '                <div alt="" class="u-image u-image-circle u-image-1" data-image-width="1300" data-image-height="867"></div>\n' +
                    '                <h4 class="u-text u-text-1">'+data[i].name+'</h4>\n' +
                    '                <h4 class="u-text u-text-1">'+data[i].country.name+'</h4>\n' +
                    '                <p class="u-text u-text-grey-50 u-text-2">'+data[i].description+'</p>\n' +
                    '                <a href="https://nicepage.cc" class="u-active-none u-align-center u-border-1 u-border-active-grey-60 u-border-black u-border-hover-grey-60 u-btn u-button-style u-hover-none u-none u-text-body-color u-btn-1">more</a>\n' +
                    '              </div>\n' +
                    '            </div>';
            }
          document.getElementById("cities").innerHTML = content;
        }
    })
}