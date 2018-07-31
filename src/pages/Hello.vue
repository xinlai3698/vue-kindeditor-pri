<template>
  <div class="Hello">
    <div style="float:left;">
      <editor id="editor_id02" height="500px" width="700px" :content.sync="editorText" :afterChange="afterChange()"
            pluginsPath="/static/kindeditor/plugins/"
            :items = "items"
            :loadStyleMode="false"
            @on-content-change="onContentChange"></editor>
    </div>
    <div style="float:left;margin-left:50px;"> <h5>editorTextCopy:</h5>
      <div v-html="editorTextCopy" style="width:800px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      // 双向同步的变量
      editorText: '直接初始化值',
      // content-change 事件回掉改变的对象
      editorTextCopy: '',
      items : ["fontname", "fontsize", "|", "forecolor", "hilitecolor", "|", "bold", "italic", "underline", "letterspacing", "lineheight", "|", "justifyleft", "justifycenter", "justifyright", "|", 'verticaltop', 'verticalmiddle', 'verticalbottom']
    }
  },
  mounted () {
    this.editorText = '<h3>页面载入绑定后，初始化值</h3>'
  },
  methods: {
    onContentChange (val) {
      this.editorTextCopy = val
    },
    afterChange () {
    }
  }
}
</script>


