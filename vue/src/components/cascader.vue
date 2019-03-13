<template>
    <Cascader :data="data" v-model="value"></Cascader>
</template>
<script>
export default {
    data(){
        return {
            value:['jiangsu','suzhou','zhuozhengyuan'],
            data:[
                {
                    value:'beijing',
                    label:'北京',
                    children:[
                        {
                            value:'gugong',
                            label:'故宫'
                        },
                        {
                            value:'tiantan',
                            label:'天坛'
                        },
                        {
                            value:'wangfujing',
                            label:'王府井'
                        }
                    ]
                },
                {
                    value:'jiangsu',
                    label:'江苏',
                    children:[
                        {
                            value:'nanjing',
                            label:'南京',
                            children: {
                                value:'fuzimiao',
                                label:'夫子庙',
                            }
                        },
                        {
                            value:'suzhou',
                            label:'苏州',
                            children: [
                                {
                                    value:'zhuozhengyuan',
                                    label:'拙政园',
                                },
                                {
                                    value:'shizilin',
                                    label:'狮子林',
                                }
                               
                            ]
                        }
                    ]
                }
            ]
        }
    },
    props:{
        data:{
            type:Array,
            default:function(){
                return [];
            }
        },
        value:{
            type:Array,
            default:function(){
                return [];
            }
        },
        disabled: {
            type:Boolean,
            default:false
        },
        clearable:{
            type:Boolean,
            default:true
        },
        placeholder:{
            type:String,
            default:'请选择'
        },
        size:{
            validator(value){
                return oneOf(value,['small','large'])
            }
        },
        trigger:{
            validator(value){
                return oneOf(value,['click','hover'])
            },
            default:'click'
        },
        changeOnSelect:{
            type:Boolean,
            default:false
        },
        renderFormat:{
            type:Function,
            default:function(label){
                return label.join('/')
            }
        }
    },

}
</script>
<style scoped>

</style>

