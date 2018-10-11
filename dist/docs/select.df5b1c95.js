webpackJsonp([7],{849:function(e,t,o){function a(e){o(939)}var n=o(1)(o(941),o(942),a,"data-v-380ff36e",null);e.exports=n.exports},939:function(e,t,o){var a=o(940);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),o(824)("d4690c0e",a,!0)},940:function(e,t,o){t=e.exports=o(823)(),t.push([e.i,".field-group[data-v-380ff36e]{display:-ms-flexbox;display:flex}.md-input-container[data-v-380ff36e]{max-width:300px}.md-input-container+.md-input-container[data-v-380ff36e]{margin-left:4px}.multiple[data-v-380ff36e]{height:150px}.select-icon[data-v-380ff36e]{margin-bottom:20px}",""])},941:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{movie:"godfather",country:"",font:"",food:"",users:[],options:[{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"},{id:4,name:"d"},{id:5,name:"e"}],items:[],usersIcon:[],iconMenuOptions:{mdAlignTrigger:!0}}},computed:{isDisabled:function(){return!0}},methods:{setPulpFiction:function(){this.movie="pulp_fiction"}}},e.exports=t.default},942:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("page-content",{attrs:{"page-title":"Components - Select"}},[o("docs-component",[o("div",{attrs:{slot:"description"},slot:"description"},[o("p",[e._v("A dropdown button selects between multiple selections. The select displays the current state and a down arrow.")])]),e._v(" "),o("div",{attrs:{slot:"api"},slot:"api"},[o("api-table",{attrs:{name:"md-select"}},[o("md-table",{attrs:{slot:"properties"},slot:"properties"},[o("md-table-header",[o("md-table-row",[o("md-table-head",[e._v("Name")]),e._v(" "),o("md-table-head",[e._v("Type")]),e._v(" "),o("md-table-head",[e._v("Description")])],1)],1),e._v(" "),o("md-table-body",[o("md-table-row",[o("md-table-cell",[e._v("v-model")]),e._v(" "),o("md-table-cell",[o("code",[e._v("String")])]),e._v(" "),o("md-table-cell",[e._v("A required model object to bind the value.")])],1),e._v(" "),o("md-table-row",[o("md-table-cell",[e._v("name")]),e._v(" "),o("md-table-cell",[o("code",[e._v("String")])]),e._v(" "),o("md-table-cell",[e._v("The name of the select")])],1),e._v(" "),o("md-table-row",[o("md-table-cell",[e._v("id")]),e._v(" "),o("md-table-cell",[o("code",[e._v("String")])]),e._v(" "),o("md-table-cell",[e._v("The id of the select")])],1),e._v(" "),o("md-table-row",[o("md-table-cell",[e._v("disabled")]),e._v(" "),o("md-table-cell",[o("code",[e._v("Boolean")])]),e._v(" "),o("md-table-cell",[e._v("Disable the input and prevent its actions. "),o("br"),e._v("Default: "),o("code",[e._v("false")])])],1),e._v(" "),o("md-table-row",[o("md-table-cell",[e._v("required")]),e._v(" "),o("md-table-cell",[o("code",[e._v("Boolean")])]),e._v(" "),o("md-table-cell",[e._v('Apply the required rule to style the label with an "*". '),o("br"),e._v("Default: "),o("code",[e._v("false")])])],1),e._v(" "),o("md-table-row",[o("md-table-cell",[e._v("placeholder")]),e._v(" "),o("md-table-cell",[o("code",[e._v("String")])]),e._v(" "),o("md-table-cell",[e._v("Set the placeholder.")])],1),e._v(" "),o("md-table-row",[o("md-table-cell",[e._v("md-menu-class")]),e._v(" "),o("md-table-cell",[o("code",[e._v("String")])]),e._v(" "),o("md-table-cell",[e._v("The css class to be applied on the opened select holder")])],1)],1)],1),e._v(" "),o("md-table",{attrs:{slot:"events"},slot:"events"},[o("md-table-header",[o("md-table-row",[o("md-table-head",[e._v("Name")]),e._v(" "),o("md-table-head",[e._v("Value")]),e._v(" "),o("md-table-head",[e._v("Description")])],1)],1),e._v(" "),o("md-table-body",[o("md-table-row",[o("md-table-cell",[e._v("selected|change")]),e._v(" "),o("md-table-cell",[e._v("Receives the value of the model")]),e._v(" "),o("md-table-cell",[e._v("Triggered when the model changes.")])],1),e._v(" "),o("md-table-row",[o("md-table-cell",[e._v("opened")]),e._v(" "),o("md-table-cell",[e._v("none")]),e._v(" "),o("md-table-cell",[e._v("Triggered when the select is opened.")])],1),e._v(" "),o("md-table-row",[o("md-table-cell",[e._v("closed")]),e._v(" "),o("md-table-cell",[e._v("none")]),e._v(" "),o("md-table-cell",[e._v("Triggered when the select is closed.")])],1)],1)],1)],1),e._v(" "),o("api-table",{attrs:{name:"md-option"}},[o("p",[e._v("Displays a single item inside the select.")]),e._v(" "),o("div",{attrs:{slot:"properties"},slot:"properties"},[o("md-table",[o("md-table-header",[o("md-table-row",[o("md-table-head",[e._v("Name")]),e._v(" "),o("md-table-head",[e._v("Type")]),e._v(" "),o("md-table-head",[e._v("Description")])],1)],1),e._v(" "),o("md-table-body",[o("md-table-row",[o("md-table-cell",[e._v("value")]),e._v(" "),o("md-table-cell",[o("code",[e._v("String")])]),e._v(" "),o("md-table-cell",[e._v("The value of the option to be binded on the v-model")])],1),e._v(" "),o("md-table-row",[o("md-table-cell",[e._v("disabled")]),e._v(" "),o("md-table-cell",[o("code",[e._v("Boolean")])]),e._v(" "),o("md-table-cell",[e._v("Disable the button and prevent its actions. "),o("br"),e._v("Default: "),o("code",[e._v("false")])])],1)],1)],1)],1),e._v(" "),o("md-table",{attrs:{slot:"events"},slot:"events"},[o("md-table-header",[o("md-table-row",[o("md-table-head",[e._v("Name")]),e._v(" "),o("md-table-head",[e._v("Value")]),e._v(" "),o("md-table-head",[e._v("Description")])],1)],1),e._v(" "),o("md-table-body",[o("md-table-row",[o("md-table-cell",[e._v("selected")]),e._v(" "),o("md-table-cell",[e._v("Receives the "),o("code",[e._v("$event")])]),e._v(" "),o("md-table-cell",[e._v("Triggered when the item receives a click.")])],1)],1)],1)],1)],1),e._v(" "),o("div",{attrs:{slot:"example"},slot:"example"},[o("example-box",{attrs:{"card-title":"Default"}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("div",{staticClass:"field-group"},[o("md-input-container",[o("label",{attrs:{for:"movie"}},[e._v("Movie")]),e._v(" "),o("md-select",{attrs:{name:"movie",id:"movie"},model:{value:e.movie,callback:function(t){e.movie=t},expression:"movie"}},[o("md-option",{attrs:{value:"fight_club"}},[e._v("Fight Club")]),e._v(" "),o("md-option",{attrs:{value:"godfather"}},[e._v("Godfather")]),e._v(" "),o("md-option",{attrs:{value:"godfather_ii"}},[e._v("Godfather II")]),e._v(" "),o("md-option",{attrs:{value:"godfather_iii"}},[e._v("Godfather III")]),e._v(" "),o("md-option",{attrs:{value:"godfellas"}},[e._v("Godfellas")]),e._v(" "),o("md-option",{attrs:{value:"pulp_fiction"}},[e._v("Pulp Fiction")]),e._v(" "),o("md-option",{attrs:{value:"scarface"}},[e._v("Scarface")])],1)],1),e._v(" "),o("md-input-container",[o("label",{attrs:{for:"country"}},[e._v("Country")]),e._v(" "),o("md-select",{attrs:{name:"country",id:"country"},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}},[o("md-option",{attrs:{value:"australia"}},[e._v("Australia")]),e._v(" "),o("md-option",{attrs:{value:"brazil"}},[e._v("Brazil")]),e._v(" "),o("md-option",{attrs:{value:"japan"}},[e._v("Japan")]),e._v(" "),o("md-option",{attrs:{value:"united_states"}},[e._v("United States")])],1)],1),e._v(" "),o("md-input-container",[o("label",{attrs:{for:"font"}},[e._v("Font")]),e._v(" "),o("md-select",{attrs:{name:"font",id:"font"},model:{value:e.font,callback:function(t){e.font=t},expression:"font"}},[o("md-option",{attrs:{value:"arial"}},[e._v("Arial")]),e._v(" "),o("md-option",{attrs:{value:"calibri"}},[e._v("Calibri")]),e._v(" "),o("md-option",{attrs:{value:"cambria"}},[e._v("Cambria")]),e._v(" "),o("md-option",{attrs:{value:"comic_sans",disabled:!0}},[e._v("Comic Sans")]),e._v(" "),o("md-option",{attrs:{value:"consolas"}},[e._v("Consolas")]),e._v(" "),o("md-option",{attrs:{value:"courier"}},[e._v("Courier")]),e._v(" "),o("md-option",{attrs:{value:"droid_sans"}},[e._v("Droid Sans")]),e._v(" "),o("md-option",{attrs:{value:"georgia"}},[e._v("Georgia")]),e._v(" "),o("md-option",{attrs:{value:"helvetica"}},[e._v("Helvetica")]),e._v(" "),o("md-option",{attrs:{value:"impact"}},[e._v("Impact")]),e._v(" "),o("md-option",{attrs:{value:"roboto"}},[e._v("Roboto")]),e._v(" "),o("md-option",{attrs:{value:"segoe_ui"}},[e._v("Segoe UI")]),e._v(" "),o("md-option",{attrs:{value:"times_new_roman"}},[e._v("Times New Roman")]),e._v(" "),o("md-option",{attrs:{value:"ubuntu"}},[e._v("Ubuntu")]),e._v(" "),o("md-option",{attrs:{value:"verdana",disabled:e.isDisabled}},[e._v("Verdana")])],1)],1),e._v(" "),o("md-input-container",[o("label",{attrs:{for:"food"}},[e._v("Food")]),e._v(" "),o("md-select",{attrs:{name:"food",id:"food"},model:{value:e.food,callback:function(t){e.food=t},expression:"food"}},[o("md-subheader",[e._v("Fruits")]),e._v(" "),o("md-option",{attrs:{value:"apples"}},[e._v("Apples")]),e._v(" "),o("md-option",{attrs:{value:"bananas"}},[e._v("Bananas")]),e._v(" "),o("md-option",{attrs:{value:"peaches"}},[e._v("Peaches")]),e._v(" "),o("md-option",{attrs:{value:"oranges"}},[e._v("Oranges")]),e._v(" "),o("md-subheader",[e._v("Vegetables")]),e._v(" "),o("md-option",{attrs:{value:"carrots"}},[e._v("Carrots")]),e._v(" "),o("md-option",{attrs:{value:"cucumbers"}},[e._v("Cucumbers")]),e._v(" "),o("md-subheader",[e._v("Baked Goods")]),e._v(" "),o("md-option",{attrs:{value:"apple_pie"}},[e._v("Apple Pie")]),e._v(" "),o("md-option",{attrs:{value:"chocolate_cake"}},[e._v("Chocolate Cake")])],1)],1)],1),e._v(" "),o("md-button",{staticClass:"md-raised md-primary",on:{click:e.setPulpFiction}},[e._v("Set Pulp Fiction")])],1),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[o("code-block",{attrs:{lang:"xml"}},[e._v('\n            <div class="field-group">\n              <md-input-container>\n                <label for="movie">Movie</label>\n                <md-select name="movie" id="movie" v-model="movie">\n                  <md-option value="fight_club">Fight Club</md-option>\n                  <md-option value="godfather">Godfather</md-option>\n                  <md-option value="godfather_ii">Godfather II</md-option>\n                  <md-option value="godfather_iii">Godfather III</md-option>\n                  <md-option value="godfellas">Godfellas</md-option>\n                  <md-option value="pulp_fiction">Pulp Fiction</md-option>\n                  <md-option value="scarface">Scarface</md-option>\n                </md-select>\n              </md-input-container>\n\n              <md-input-container>\n                <label for="country">Country</label>\n                <md-select name="country" id="country" v-model="country">\n                  <md-option value="australia">Australia</md-option>\n                  <md-option value="brazil">Brazil</md-option>\n                  <md-option value="japan">Japan</md-option>\n                  <md-option value="united_states">United States</md-option>\n                </md-select>\n              </md-input-container>\n\n              <md-input-container>\n                <label for="font">Font</label>\n                <md-select name="font" id="font" v-model="font">\n                  <md-option value="arial">Arial</md-option>\n                  <md-option value="calibri">Calibri</md-option>\n                  <md-option value="cambria">Cambria</md-option>\n                  <md-option value="comic_sans" :disabled="true">Comic Sans</md-option>\n                  <md-option value="consolas">Consolas</md-option>\n                  <md-option value="courier">Courier</md-option>\n                  <md-option value="droid_sans">Droid Sans</md-option>\n                  <md-option value="georgia">Georgia</md-option>\n                  <md-option value="helvetica">Helvetica</md-option>\n                  <md-option value="impact">Impact</md-option>\n                  <md-option value="roboto">Roboto</md-option>\n                  <md-option value="segoe_ui">Segoe UI</md-option>\n                  <md-option value="times_new_roman">Times New Roman</md-option>\n                  <md-option value="ubuntu">Ubuntu</md-option>\n                  <md-option value="verdana" :disabled="isDisabled">Verdana</md-option>\n                </md-select>\n              </md-input-container>\n\n              <md-input-container>\n                <label for="food">Food</label>\n                <md-select name="food" id="food" v-model="food">\n                  <md-subheader>Fruits</md-subheader>\n                  <md-option value="apples">Apples</md-option>\n                  <md-option value="bananas">Bananas</md-option>\n                  <md-option value="peaches">Peaches</md-option>\n                  <md-option value="oranges">Oranges</md-option>\n\n                  <md-subheader>Vegetables</md-subheader>\n                  <md-option value="carrots">Carrots</md-option>\n                  <md-option value="cucumbers">Cucumbers</md-option>\n\n                  <md-subheader>Baked Goods</md-subheader>\n                  <md-option value="apple_pie">Apple Pie</md-option>\n                  <md-option value="chocolate_cake">Chocolate Cake</md-option>\n                </md-select>\n              </md-input-container>\n            </div>\n\n            <md-button class="md-raised md-primary" @click="setPulpFiction">Set Pulp Fiction</md-button>\n          ')]),e._v(" "),o("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                movie: 'godfather',\n                country: '',\n                font: ''\n              }),\n              computed: {\n                isDisabled() {\n                  return true;\n                }\n              },\n              methods: {\n                setPulpFiction() {\n                  this.movie = 'pulp_fiction';\n                }\n              }\n            };\n          ")])],1)]),e._v(" "),o("example-box",{attrs:{"card-title":"Multiple"}},[o("div",{staticClass:"multiple",attrs:{slot:"demo"},slot:"demo"},[o("div",{staticClass:"field-group"},[o("md-input-container",[o("label",{attrs:{for:"users"}},[e._v("Simple multiselect")]),e._v(" "),o("md-select",{attrs:{name:"option",id:"option",multiple:""},model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},e._l(e.options,(function(t,a){return o("md-option",{key:a,attrs:{value:t}},[e._v("\n                  "+e._s(t.name)+"\n                ")])})))],1)],1),e._v(" "),o("div",[e._v("Selected letters: "+e._s(e.items))]),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("div",{staticClass:"field-group"},[o("md-input-container",[o("label",{attrs:{for:"users"}},[e._v("Multiselect with subheaders")]),e._v(" "),o("md-select",{attrs:{name:"users",id:"users",multiple:""},model:{value:e.users,callback:function(t){e.users=t},expression:"users"}},[o("md-subheader",[e._v("Managers")]),e._v(" "),o("md-option",{attrs:{value:"jim_halpert"}},[e._v("Jim Halpert")]),e._v(" "),o("md-option",{attrs:{value:"dwight_schrute"}},[e._v("Dwight Schrute")]),e._v(" "),o("md-option",{attrs:{value:"michael_scott"}},[e._v("Michael Scott")]),e._v(" "),o("md-subheader",[e._v("Employees")]),e._v(" "),o("md-option",{attrs:{value:"pam_beesly"}},[e._v("Pam Beesly")]),e._v(" "),o("md-option",{attrs:{value:"angela_martin"}},[e._v("Angela Martin")]),e._v(" "),o("md-option",{attrs:{value:"kelly_kapoor"}},[e._v("Kelly Kapoor")]),e._v(" "),o("md-option",{attrs:{value:"ryan_howard"}},[e._v("Ryan Howard")]),e._v(" "),o("md-option",{attrs:{value:"kevin_malone"}},[e._v("Kevin Malone")]),e._v(" "),o("md-option",{attrs:{value:"creed_bratton"}},[e._v("Creed Bratton")]),e._v(" "),o("md-option",{attrs:{value:"oscar_nunez"}},[e._v("Oscar Nunez")]),e._v(" "),o("md-option",{attrs:{value:"toby_flenderson"}},[e._v("Toby Flenderson")]),e._v(" "),o("md-option",{attrs:{value:"stanley_hudson"}},[e._v("Stanley Hudson")]),e._v(" "),o("md-option",{attrs:{value:"meredith_palmer"}},[e._v("Meredith Palmer")]),e._v(" "),o("md-option",{attrs:{value:"phyllis_lapin_vance"}},[e._v("Phyllis Lapin-Vance")])],1)],1)],1),e._v(" "),o("div",[e._v("Selected users: "+e._s(e.users))])]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[o("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-input-container>\n              <label for="users=">Simple multiselect</label>\n              <md-select name="option=" id="option=" multiple v-model="items=">\n                <md-option v-for="(option, index) in options="\n                  :key="index="\n                  :value="option=">\n                  { { option.name } }\n                </md-option>\n              <md-select>\n            </md-input-container>\n\n            <div>Selected letters: '+e._s(e.items)+'</div>\n\n\n            <md-input-container>\n              <label for="users">Users</label>\n              <md-select name="users" id="users" multiple v-model="users">\n                <md-subheader>Managers</md-subheader>\n                <md-option value="jim_halpert">Jim Halpert</md-option>\n                <md-option value="dwight_schrute">Dwight Schrute</md-option>\n                <md-option value="michael_scott">Michael Scott</md-option>\n\n                <md-subheader>Employees</md-subheader>\n                <md-option value="pam_beesly">Pam Beesly</md-option>\n                <md-option value="angela_martin">Angela Martin</md-option>\n                <md-option value="kelly_kapoor">Kelly Kapoor</md-option>\n                <md-option value="ryan_howard">Ryan Howard</md-option>\n                <md-option value="kevin_malone">Kevin Malone</md-option>\n                <md-option value="creed_bratton">Creed Bratton</md-option>\n                <md-option value="oscar_nunez">Oscar Nunez</md-option>\n                <md-option value="toby_flenderson">Toby Flenderson</md-option>\n                <md-option value="stanley_hudson">Stanley Hudson</md-option>\n                <md-option value="meredith_palmer">Meredith Palmer</md-option>\n                <md-option value="phyllis_lapin_vance">Phyllis Lapin-Vance</md-option>\n              </md-select>\n            </md-input-container>\n\n            <div>Selected users: '+e._s(e.users)+"</div>\n          ")]),e._v(" "),o("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                food: '',\n                users: [],\n                options: [\n                  { id: 1, name: 'a' },\n                  { id: 2, name: 'b' },\n                  { id: 3, name: 'c' },\n                  { id: 4, name: 'd' },\n                  { id: 5, name: 'e' }\n                ],\n                items: []\n              })\n            };\n          ")])],1)]),e._v(" "),o("example-box",{attrs:{"card-title":"Icon"}},[o("div",{attrs:{slot:"demo"},slot:"demo"},[o("div",{staticClass:"field-group select-icon"},[o("md-select",{attrs:{name:"users",id:"usersIcon",multiple:"","md-align-trigger":"","md-menu-options":e.iconMenuOptions},model:{value:e.usersIcon,callback:function(t){e.usersIcon=t},expression:"usersIcon"}},[o("md-button",{staticClass:"md-icon-button",attrs:{slot:"icon","md-menu-trigger":""},slot:"icon"},[o("md-icon",[e._v("people")])],1),e._v(" "),o("md-subheader",[e._v("Managers")]),e._v(" "),o("md-option",{attrs:{value:"jim_halpert"}},[e._v("Jim Halpert")]),e._v(" "),o("md-option",{attrs:{value:"dwight_schrute"}},[e._v("Dwight Schrute")]),e._v(" "),o("md-option",{attrs:{value:"michael_scott"}},[e._v("Michael Scott")]),e._v(" "),o("md-subheader",[e._v("Employees")]),e._v(" "),o("md-option",{attrs:{value:"pam_beesly"}},[e._v("Pam Beesly")]),e._v(" "),o("md-option",{attrs:{value:"angela_martin"}},[e._v("Angela Martin")]),e._v(" "),o("md-option",{attrs:{value:"kelly_kapoor"}},[e._v("Kelly Kapoor")]),e._v(" "),o("md-option",{attrs:{value:"ryan_howard"}},[e._v("Ryan Howard")]),e._v(" "),o("md-option",{attrs:{value:"kevin_malone"}},[e._v("Kevin Malone")]),e._v(" "),o("md-option",{attrs:{value:"creed_bratton"}},[e._v("Creed Bratton")]),e._v(" "),o("md-option",{attrs:{value:"oscar_nunez"}},[e._v("Oscar Nunez")]),e._v(" "),o("md-option",{attrs:{value:"toby_flenderson"}},[e._v("Toby Flenderson")]),e._v(" "),o("md-option",{attrs:{value:"stanley_hudson"}},[e._v("Stanley Hudson")]),e._v(" "),o("md-option",{attrs:{value:"meredith_palmer"}},[e._v("Meredith Palmer")]),e._v(" "),o("md-option",{attrs:{value:"phyllis_lapin_vance"}},[e._v("Phyllis Lapin-Vance")])],1)],1),e._v(" "),o("div",[e._v("Selected users: "+e._s(e.usersIcon))])]),e._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[o("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-select name="users" id="users" multiple v-model="users">\n              <md-button class="md-icon-button" md-menu-trigger slot="icon">\n                <md-icon>people</md-icon>\n              </md-button>\n              \n              <md-subheader>Managers</md-subheader>\n              <md-option value="jim_halpert">Jim Halpert</md-option>\n              <md-option value="dwight_schrute">Dwight Schrute</md-option>\n              <md-option value="michael_scott">Michael Scott</md-option>\n\n              <md-subheader>Employees</md-subheader>\n              <md-option value="pam_beesly">Pam Beesly</md-option>\n              <md-option value="angela_martin">Angela Martin</md-option>\n              <md-option value="kelly_kapoor">Kelly Kapoor</md-option>\n              <md-option value="ryan_howard">Ryan Howard</md-option>\n              <md-option value="kevin_malone">Kevin Malone</md-option>\n              <md-option value="creed_bratton">Creed Bratton</md-option>\n              <md-option value="oscar_nunez">Oscar Nunez</md-option>\n              <md-option value="toby_flenderson">Toby Flenderson</md-option>\n              <md-option value="stanley_hudson">Stanley Hudson</md-option>\n              <md-option value="meredith_palmer">Meredith Palmer</md-option>\n              <md-option value="phyllis_lapin_vance">Phyllis Lapin-Vance</md-option>\n            </md-select>\n\n            <div>Selected users: '+e._s(e.users)+"</div>\n          ")]),e._v(" "),o("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                food: '',\n                users: [\n                  'jim_halpert',\n                  'michael_scott'\n                ]\n              })\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}}});