Vue.component('navcartmodal', {

    template:`
<div>
    


<div class="container">



        <button type="button " class="btn text-white mr-4 d-flex align-items-center position-relative" data-toggle="modal"
            data-target="#myCart">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-layers-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"/>
  <path fill-rule="evenodd" d="M2.125 8.567l-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"/>
</svg>
            <span>Shopping Card</span>
            <span class="pop" :class="{'bounceIn animated': animated}" @animationend="$emit('ani')" >
                {{youritemnumber}} 
            </span>
        </button>

    <div class="modal fade" id="myCart" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content mt-5">
                <div class="modal-header">
                    <h4 class="modal-title">Your Shopping Cart</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body ">
                    <div class="list-group scroll-y">
                        <div class="list-group-item d-flex justify-content-between align-items-center"
                            v-for="(cart, ind) in yourcart" :key="cart.id" v-if="yourcart.length > 0">
                            <div>
                                <!-- Xoá item trong cart -->
                                <button type="button" class="btn btn-outline-danger btn-sm mr-2"
                                    @click="cartremove(ind)">x</button>
                                {{ cart.obj.title}}
                            </div>

                            <div>
                                <span class="btn font-weight-bold text-success">
                                    {{ priceformat(cart.obj.price)}} </span>
                                <div class="btn-group dropup">
                                    <button type="button" @click="cartup(ind)"
                                        class="btn btn-light dropdown-toggle dropdown-toggle-split"></button>
                                    </button>
                                </div>
                                    <span class="btn border">{{ cart.quantity}}</span>
                                <div class="btn-group dropdown">
                                    <button type="button" @click="cartdown(ind)"
                                        class="btn btn-light dropdown-toggle dropdown-toggle-split"></button>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="yourcart.length == 0 || yourcart == undefined">
                        <h4 class="text-center bg-light p-3">
                            Sorry, no items were found
                        </h4>
                        <h6 class="text-center"> please add some items</h6>
                    </div>

                </div>
                <div class="modal-footer">
                    <p>Total: </p>
                    <h2 class="text-danger font-weight-bold"> {{ priceformat(yourcarttotalcomputed) }} </h2>
                </div>
            </div>
        </div>
    </div>

</div>

</div>`,
    props: {
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
        priceformat(pri) {
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(pri);
        },
    }


})