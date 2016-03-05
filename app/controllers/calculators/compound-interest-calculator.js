import Ember from 'ember';

export default Ember.Controller.extend({
  futureValue: function() {
    // naiive
    var futureValue = this.getFloatNumber('currentPrincipal');
    var annualAddition = this.getFloatNumber('annualAddition');
    var yearsToGrow = this.getFloatNumber('yearsToGrow');
    // TODO: validation and adjustment to rate
    var rate = this.getFloatNumber('interestRate');
    var rateMultiplier = rate / 100.0;
    for(var i = 0; i < yearsToGrow; i++) {
      futureValue = futureValue + annualAddition;
      futureValue = futureValue + futureValue * rateMultiplier;
    }
    return this.roundNumber(futureValue, 2);
  }.property('currentPrincipal', 'annualAddition', 'yearsToGrow', 'interestRate'),

  roundNumber: function(number, precision) {
    precision = (typeof precision !== 'undefined') ? precision : 3;
    var m = Math.pow(10, precision);
    if(number && !isNaN(parseFloat(number))) {
      return Math.round(parseFloat(number) * m) / m;
    }
    return 0;
  },

  getFloatNumber: function(propertyName) {
    if(propertyName) {
      var numberText = this.get(propertyName);
      if(numberText) {
        var parsed = parseFloat(numberText);
        return !isNaN(parsed) ? parsed : 0;
      }
    }
    return 0;
  }
});
