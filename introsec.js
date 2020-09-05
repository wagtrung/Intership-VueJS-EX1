
    Vue.component('introsec', {
        template: `   
        <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators carousel-indicatorsx">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
    
            <div class="onTopCarousel">
                <div class=" d-md-block text-center col-5">
                    <h1 class="text-white mb-4 font-weight-bold">MeU Internship Shop</h1>
                    <p class="text-light">Buy or delete the available products and you can upload your own products with the
                        completive prices, awesome description</p>
                    <a href="#app" class="btn btn-lg btn-success mt-4">Shop Now</a>
                </div>
            </div>
    
    
            <div class="carousel-inner ">
                <div class="carousel-item active">
                    <img class="d-block w-100"
                        src="https://images.pexels.com/photos/2387532/pexels-photo-2387532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide">
    
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100"
                        src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100"
                        src="https://images.pexels.com/photos/4053562/pexels-photo-4053562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide">
                </div>
            </div>
            <div class="xxx">
            </div>
    
    
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
    
            <!-- Info  -->
            <div class="container infoTab">
                <div class="row">
                    <div class="col-md-12">
                        <div id="card-197713">
                            <div class="card">
                                <div class="inforTitle d-flex justify-content-between align-items-center">
                                    <a class="btn btn-light btn-lg rounded-0" data-toggle="collapse"
                                        data-parent="#card-197713" href="#card-element-352257">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16"
                                            class="mr-2 bi bi-info-circle-fill" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </svg>Coding Detail
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill"
                                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                    </a>
                                    <div class="d-flex">
                                        <h2 class="badge badge-primary mr-2">HTML/CSS</h2>
                                        <h2 class="badge badge-danger  mr-2"> Bootrap </h2>
                                        <h2 class="badge badge-warning mr-2"> JavaScript</h2>
                                        <h2 class="badge badge-success">VueJS </h2>
                                    </div>
                                </div>
                                <div id="card-element-352257" class="collapse ">
                                    <div class=" card">
                                        <!-- Intro -->
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="jumbotron bg-white mt-4 ">
                                                    <h2 class="bg-primary p-4  text-white font-weight-bold mb-3 ">
                                                        Internship Program 2020
                                                    </h2>
                                                    <p>
                                                        At MeU Solutions, This is a required exercise to review the
                                                        level of Front-end web
                                                        development with tools and
                                                        techniques for JavaScript Programming with VueJS framwork,
                                                        in addition to the background
                                                        skills of HTML, CSS in combining Bootrap from the web site
                                                        development team, specially
                                                        supervised by the main instructor Van Luyen </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="tabbable p-4" id="tabs-914978">
                                                    <ul class="nav nav-tabs">
                                                        <li class="nav-item">
                                                            <a class="nav-link active" href="#tab1"
                                                                data-toggle="tab">Requires</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#tab2"
                                                                data-toggle="tab">Techniques</a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content mt-4 ">
                                                        <div class="tab-pane active " id="tab1">
                                                            <ul>
                                                                <span class="badge badge-danger p-2 mb-2">Yêu cầu 1
                                                                    trang show danh sách sản
                                                                    phẩm</span>
                                                                <li>1 nút thêm sản phẩm gọi modal (modal là 1
                                                                    component)</li>
                                                                <li>1 nút thêm vào giỏ hàng thì cập nhật số lượng
                                                                    sản phẩm lên trên giỏ hàng
                                                                </li>
                                                                <li>bấm vào giỏ hàng show tất cả sản phẩm đã add
                                                                    (yêu cầu realtime ko load lại
                                                                    page)</li>
                                                                <span class="badge badge-success p-2 mt-3 mb-2">Mở
                                                                    rộng ý tưởng từ bản
                                                                    thân</span>
                                                                <li>Xoá sản phẩm đang có trên màn hình</li>
                                                                <li>Điều chỉnh tăng,giảm hoặc xoá lượng sản phẩm đã
                                                                    thêm vào giỏ hàng</li>
                                                                <li>Tính tổng tiền sản phẩm đã được thêm vào giỏ
                                                                    hàng</li>
                                                                <li>Xác minh điệu kiện để thêm sản phẩm mới</li>
                                                                <li>Tìm sản phẩm đang có theo tên</li>
                                                            </ul>
                                                        </div>
                                                        <div class="tab-pane" id="tab2">
                                                            <ul>
                                                                <span class="badge badge-danger p-2 mb-2">HTML</span>
                                                                <li>phối hợp các thẻ html cơ bản</li>
                                                                <li>Sự dụng các Class, ID </li>
                                                                <li>Sử dụng Form (input, label, for, name ...)</li>
                                                                <span class="badge badge-primary p-2 mt-3 mb-2">CSS</span>
                                                                <li>Sự dụng Bootrap thay thế</li>
                                                                <li>Điều chỉnh mẫu theo kiểu Internal-Style</li>
                                                                <span class="badge badge-success p-2 mt-3 mb-2">Vue
                                                                    JS</span>
                                                                <li>Sử dụng V-for, V-bind, V-if ...</li>
                                                                <li>Sử dụng components</li>
                                                                <li>Emit sự kiện, dữ liệu từ con vào cha</li>
                                                                <li>Props dữ liệu từ cha vào con</li>
                                                                <li>transition trong VueJS</li>
                                                                <li>Function & Computed</li>
                                                                <li>Làm việc với ES6 JavaScript (Đặc biệt Arrow
                                                                    funtion, this)</li>
                                                                <li>Làm việc với Array và Object</li>
                                                                <li>Lam việc với một số hàm trong Array (splice,
                                                                    unshift, push, filter, some,
                                                                    ...)</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End info -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        data() {
            return {
            }
        },
        methods: {
            
        },
        computed: {
        }

    })

