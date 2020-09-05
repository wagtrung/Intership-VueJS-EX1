    Vue.component('product', {

        template: `<div>
        
        <div class="added" :class="{'openadded':animated }">
            Added the item
        </div>

        
        
        <div class="card product">
            
    
        <div class="text-danger rounded-circle closex" @click="removefromcardfunc">
        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    </div>
        


        <div class="flowhidden "  @click="isopen = true">
            <img class="card-img-top" :src="item.srcimg" :alt="item.title ">
        </div>
    

    <div class="card-body" >
    <div @click="isopen = true">
        <h5 class="card-title font-weight-bold">{{item.title}}</h5>
        <p class="card-text">{{ item.subtitle }} </p>
        <hr>
        <div class=" subcart">
            <h4 class="text-success font-weight-bold"> {{ priceformat(item.price) }} </h4>
                <div class="">
                    <div class="tagg mr-2 mb-2" v-for="tag in item.tags" >
                    <span class="">{{tag}}</span>
                </div>
            </div>
        </div>
        </div>

        <div class="actionbtn">
                <div class="text-white text-middle text-center " @click="addtocardfunc">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                    <span class="font-weight-bold"> Add to cart</span>
                </div>
        </div>
        
    </div>
</div>

        


<popup-rule @handleconfirm="isopen = false" :isopencon="isopen">
    <div slot="modalbody">

        <div class="d-flex">
        <div class="col-md-6 imginside" :style="{background : 'url('+ item.srcimg  + '), #e9e8e8'}" > 
                
            </div>
            <div class="col-md-6">
                <h3 class="my-3 font-weight-bold">
                    {{ item.title }}
                </h3>
                <h4 class="text-sucess">{{ priceformat(item.price) }} </h4>
                <hr>

                <div class="card">
                    <p class="my-2 font-weight-bold">Description</p>
                    <p>{{item.subtitle}}</p>

                    <p class="my-2 font-weight-bold" v-if="item.tags != null">Tags Details</p>
                    <h5><span class="badge badge-dark mr-2 " v-for="tag in item.tags">
                            {{tag}}
                        </span></h5>
                </div>

                <div class="btn btn-success btn-lg btn-block  mt-4" @click.stop="addtocardfunc"> Add to cart </div>
            </div>
        </div>

    </div>
</popup-rule>


        </div>`,

        props: {
            animated:Boolean,
            propA: Number,
            propB: [String, Number],
            'item': Object,
            index: Number,
    },
        data() {
            return {
                isopen:false,
                
            }
        },
        methods: {
            addtocardfunc() {
                var k =this.index
                this.$emit('addtocardfunc', k)
            },
            removefromcardfunc() {
                var k =this.index
                this.$emit('removefromcardfunc', k)
                
            },
            priceformat(pri) {
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(pri);
            },
        //     parentFunc(data) {
        //         this.items.unshift(data)
        //     },
        //     cartUp(index) {
        //         return this.yourCart[index].quantity++, this.yourItemNumber++
        //     },
        //     cartDown(index) {
        //         if (this.yourCart[index].quantity > 1)
        //             return this.yourCart[index].quantity--, this.yourItemNumber--
        //     },
        //     cartRemove(index) {
        //         this.yourItemNumber -= this.yourCart[index].quantity
        //         this.yourCart.splice(index, 1)
        //     }
        }

        
        // computed: {
        //     yourCartTotalComputed() {
        //         var sum = 0
        //         this.yourCart.forEach(x => {
        //             sum += (x.obj.price * x.quantity)
        //         })
        //         return this.yourCartTotal = sum
        //     },
        //     filteredList() {
        //         return this.items.filter(post => {
        //             return post.title.toLowerCase().includes(this.search.toLowerCase())
        //         })
        //     }
        

        
        

    })
