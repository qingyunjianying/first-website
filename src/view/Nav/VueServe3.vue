.<template>
  <div class="main">
    <div class="culu">
      <p class="title">汇率计算器</p>
      <ul>
        <li>
          <span>{{from.currency}}</span>
          <input v-model="from.amount"></input>
        </li>
        <!-- <li
        v-for="(to,index) in to "
        :key="index"
        @click="changeCurrency"
      > -->
        <li
          v-for="(item,index) in to"
          :key="index"
          v-bind:data-currency="item.currency"
          @click="changeCurrency"
        >
          <span>{{item.currency}}</span>
          <span>{{item.amount}}</span>
        </li>
      </ul>
      <p class="intro">鼠标点击可以切换货币种类</p>
    </div>
  </div>
</template>

<script>
let rate = {
  CNY: { CNY: 1, JPY: 16.876, HKD: 1.187, USD: 0.1526, EUR: 0.1294 },
  JPY: { CNY: 0.0595, JPY: 1, HKD: 0.0702, USD: 0.009, EUR: 0.0077 },
  HKD: { CNY: 0.8463, JPY: 14.226, HKD: 1, USD: 0.1286, EUR: 0.10952 },
  USD: { CNY: 6.5813, JPY: 110.62, HKD: 7.7759, USD: 1, EUR: 0.85164 },
  EUR: { CNY: 7.7278, JPY: 129.89, HKD: 9.1304, USD: 1.1742, EUR: 1 },
};
export default {
  data() {
    return {
      to: [
        { currency: "JPY", amount: 0 },
        { currency: "HKD", amount: 0 },
        { currency: "USD", amount: 0 },
        { currency: "EUR", amount: 0 },
      ],
      from: { currency: "CNY", amount: 100 },
    };
  },
  // props: { from: { currency: "CNY", amount: 100 } },
  methods: {
    exchange(from, amount, to) {
      return (amount * rate[from][to]).toFixed(2);
    },
    changeCurrency(event) {
      const c = event.currentTarget.dataset.currency;
      const f = this.from.currency;
      this.from.currency = c;
      // this.from.currency = c;
      this.to.find((_) => _.currency === c).currency = f;
    },
  },
  watch: {
    from: {
      handler(value) {
        this.to.forEach((item) => {
          item.amount = this.exchange(
            this.from.currency,
            this.from.amount,
            item.currency
          );
        });
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style scoped>
p.title {
  text-align: center;
  font-size: 18px;
  margin: 30px 0 10px 0;
}
p.intro {
  text-align: center;
  font-size: 14px;
}
ul {
  margin: 0 auto;
  width: 200px;
  list-style-type: none;
  border: 2px solid #999;
  border-radius: 10px;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
}
li {
  padding: 10px;
}
li:first-child {
  display: flex;
  border-bottom: 2px solid #999;
}
li:not(:first-child):hover {
  background-color: #ddd;
}
span {
  cursor: default;
}
span:last-child {
  float: right;
}
input {
  text-align: right;
  border: none;
  font-size: 16px;
  width: 100px;
  margin-left: auto;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  outline: none;
  border-bottom: 1px solid #000;
}
</style>