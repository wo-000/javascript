<template>
    <Panel title="理财金融" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item"></div>
        </section>
    </Panel>
</template>
<script>
import Panel from '../core/panel.vue'
export default {
    components:{
        Panel,
    }
}
</script>
<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    @include panel;
    .content{

    }
}
</style>
