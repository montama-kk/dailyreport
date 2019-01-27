<template>
  <v-container grid-list-md text-xs-left align-center>
    <v-layout row wrap justify-space-around>
      <v-flex xs6>
        <v-icon>create</v-icon>
        <v-textarea rows="30" solo v-model="source" :value="source"></v-textarea>
      </v-flex>
      <v-flex xs6>
        <v-icon>visibility</v-icon>
        <v-card min-height="80%" class="pl-2">
          <vue-markdown class="markdown-body" :source="source"></vue-markdown>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'Create',
  components: {
    VueMarkdown
  },
  data: () => ({
    // todo: get data from api
    source: `
# {yyyy}/{mm}/{dd}(day)

### 勤務時間
09:00 - 18:00

### 今日やったこと
* #1234: XXXX画面の開発(50%)

### 明日やること
* #1234: XXXX画面の開発・単体テスト(100%)

### 困っていること・課題
手順書が不正確で環境構築に手こずりました。
アップデートするタスクを作ろうと思います。

### 連絡事項
通院のため、明日は午前休となります。

### その他
最近犬を飼い始めました。
名前はけいすけといいます。
`.trim()
  })
}
</script>

<style scoped>
.v-content .xs6 {
  padding: 4px 10px;
}

.markdown-body ul {
  padding-inline-start: 24px;
}
</style>
