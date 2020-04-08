module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: [
    'vue'
  ],
  // ここにカスタムルールを追加します。
  rules: {
    semi: [2, 'never'],
    'vue/html-indent': ['error', 2],
    'no-console': 'off',//console.log();OK
    'no-unused-vars': 'off',//使っていない変数あってもOK
    'vue/html-self-closing': 'off',//imgタグのようにタグが１つで完結してもOK
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore'//aタグの羅列などで変な風にならないように追記
      }
    ]
  }
}
