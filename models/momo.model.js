const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const momoSchema = new Schema({
    date: { type: Date, required: true },
    algo_volatility: { type: Number, required: true },
    algorithm_period_return: { type: Number, required: true },
    alpha: { type: Number, required: true },
    benchmark_period_return: { type: Number, required: true },
    benchmark_volatility: { type: Number, required: true },
    beta: { type: Number, required: true },
    capital_used: { type: Number, required: true },
    ending_cash: { type: Number, required: true },
    ending_exposure: { type: Number, required: true },
    ending_value: { type: Number, required: true },
    excess_return: { type: Number, required: true },
    gross_leverage: { type: Number, required: true },
    long_exposure: { type: Number, required: true },
    long_value: { type: Number, required: true },
    longs_count: { type: Number, required: true },
    max_drawdown: { type: Number, required: true },
    max_leverage: { type: Number, required: true },
    net_leverage: { type: Number, required: true },
    period_close: { type: Number, required: true },
    period_label: { type: Number, required: true },
    period_open: { type: Number, required: true },
    pnl: { type: Number, required: true },
    portfolio_value: { type: Number, required: true },
    returns: { type: Number, required: true },
    sharpe: { type: Number, required: true },
    short_exposure: { type: Number, required: true },
    short_value: { type: Number, required: true },
    shorts_count: { type: Number, required: true },
    sortino: { type: Number, required: true },
    starting_cash: { type: Number, required: true },
    starting_exposure: { type: Number, required: true },
    starting_value: { type: Number, required: true },
    trading_days: { type: Number, required: true },
    treasury_period_return: { type: Number, required: true },
    max: { type: Number, required: true },
    dd: { type: Number, required: true },
}, {
  timestamps: true,
  collection: 'momo'
});

const momo= mongoose.model('momo', momoSchema);

module.exports = momo;