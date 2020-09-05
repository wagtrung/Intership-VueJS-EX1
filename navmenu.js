
    Vue.component('navmenu', {
        template: `<div>
            
        <div class="container p-0 ">
        <!-- Nav -->
        <div class class="row ">
            <nav class="navbar smart-scroll">
                <div class='d-flex align-items-center' style="flex: 0 0 800px">
                    <a href="#">
                        <img src="./img/e2.png" id="imgBrand">
                    </a>
                    <input class="form-control ml-2 kk rounded-0" 
                    @input="changesearch"
                    type="search" placeholder="Search" aria-label="Search">
                </div>
                <div class='d-flex align-items-center '>

                    <navcartmodal 
                    :yourcart="yourcart"
                    :yourcarttotalcomputed ="yourcarttotalcomputed"
                    :youritemnumber="youritemnumber"
                    :animated="animated"
                    @ani="$emit('ani')"
                    @cartremove="cartremove"
                    @cartup="cartup"
                    @cartdown="cartdown"
                    > </navcartmodal>

                    <navaddmodal @childevent="parentfunc" > </navaddmodal>
                </div>
            </nav>
        </div>
    </div>


            </div>`,
        props:{
            
            yourcart: {
                type: Array,
            },
            animated: Boolean,
            youritemnumber: Number,
            yourcarttotalcomputed: [Function, Number]

        },
        data() {
            return {
                
            }
        },
        methods: {
            changesearch(e) {
                var value= e.target.value
                this.$emit('changesearch', value)
            },
            cartremove(index){
                var k = index
                this.$emit('cartremove', k)
            },
            
            cartup(index){
                var k = index
                this.$emit('cartup', k)
            },
            
            cartdown(index){
                var k = index
                this.$emit('cartdown', k)
            },
            parentfunc(index){
                var k = index
                this.$emit('parentfunc', k)
            },

            
        },
        computed: {
        },
        beforeCreate() {
            if ($('.smart-scroll').length >= 0) { 
                $(window).on('scroll', function () {
                    scroll_top = $(this).scrollTop();
                    if (scroll_top < 550) {
                        $('.smart-scroll').removeClass('scrolled-up').addClass('normal')
                    }
                    else {
                        $('.smart-scroll').addClass('scrolled-up').removeClass('normal')
                        
                    }
                });
            }
        }
    })


    

