export const AppComponent = {
  template: `
    <div class="app">
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter name here">
      <hr>
      <greeter name="yourName"></greeter>
    </div>
  `
};
