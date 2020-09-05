Vue.component('popup-rule', {
    template: `
    <div >
    
    <div class="wrapper-popup" v-bind:class="{'open-popup': isopencon}" v-on:click.stop="$emit('handleconfirm')" ></div>
    <div class="rule" v-bind:class="{'open-popup': isopencon}">
            <slot name="modalbody"></slot>
            <button class="confirm"
                v-on:click="$emit('handleconfirm')">X
            </button>
    </div>
    
    
</div>`,
    props: {
        isopencon: {
            type: Boolean,
            default: false
        },
    },
})