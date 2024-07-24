(function(){"use strict";var e={1070:function(e,t,r){var a=r(6848),o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("FormPage")],1)},i=[],n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("b-row",[t("b-col",{staticClass:"text-center"},[t("img",{attrs:{src:r(3153),width:"327",alt:"DIETEC SDR"}})])],1),t("b-row",[t("b-col",{staticClass:"text-center"},[t("h1",{staticClass:"display-4 text-primary"},[e._v("Formulario de registro")]),t("p",{staticClass:"lead"},[e._v("Por favor, llene los siguientes campos para completar su perfil")])])],1),t("b-row",[t("b-col",[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("b-card",[t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2"},[t("b-form-group",{attrs:{id:"input-group-1",label:"Nombre completo:","label-for":"fullName"}},[t("b-form-input",{attrs:{id:"fullName",type:"text",required:"",trim:"",placeholder:"Ingrese su nombre",maxlength:"50",minlength:"3"},model:{value:e.fullName,callback:function(t){e.fullName=t},expression:"fullName"}})],1)],1)],1),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2"},[t("b-form-group",{attrs:{id:"input-group-2",label:"Ocupación:","label-for":"occupation"}},[t("b-form-input",{attrs:{id:"occupation",type:"text",required:"",trim:"",placeholder:"Ingrese su ocupación",maxlength:"50",minlength:"3"},model:{value:e.occupation,callback:function(t){e.occupation=t},expression:"occupation"}})],1)],1)],1),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"6"}},[t("b-form-group",{attrs:{id:"input-group-3",label:"Estado:","label-for":"state"}},[t("b-form-select",{attrs:{id:"state",options:e.statesOptions,required:""},scopedSlots:e._u([{key:"first",fn:function(){return[t("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v("Seleccione el estado en el que vive ")])]},proxy:!0}]),model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1)],1),t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"6"}},[t("b-form-group",{attrs:{id:"input-group-4",label:"Ciudad:","label-for":"city"}},[t("b-form-input",{attrs:{id:"city",type:"text",required:"",trim:"",placeholder:"Ingrese su ciudad",maxlength:"50",minlength:"2"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1)],1)],1),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"6"}},[t("b-form-group",{attrs:{id:"input-group-5",label:"Sexo de nacimiento:","label-for":"gender"}},[t("b-form-radio-group",{attrs:{id:"radio-group-1",options:e.gendersOptions,required:""},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}})],1)],1),t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"6"}},[t("b-form-group",{attrs:{id:"input-group-6",label:"¿Practica ejercicio?","label-for":"exercise"}},[t("b-form-radio-group",{attrs:{id:"radio-group-2",options:[{text:"Sí",value:"Sí"},{text:"No",value:"No"}],required:""},model:{value:e.exercise,callback:function(t){e.exercise=t},expression:"exercise"}})],1)],1)],1),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{attrs:{cols:"12"}},[t("b-form-group",{attrs:{id:"input-group-7",label:"Fecha de nacimiento:","label-class":"px-3","label-for":"birthDate"}},[t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 py-1",attrs:{cols:"12",md:"4"}},[t("b-form-select",{attrs:{id:"birthYear",options:e.yearOptions,required:""},on:{change:function(t){return e.daysInMonth(e.birthMonth,e.birthYear)}},scopedSlots:e._u([{key:"first",fn:function(){return[t("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v("Año ")])]},proxy:!0}]),model:{value:e.birthYear,callback:function(t){e.birthYear=t},expression:"birthYear"}})],1),t("b-col",{staticClass:"px-3 py-1",attrs:{cols:"12",md:"4"}},[t("b-form-select",{attrs:{id:"birthMonth",options:e.monthOptions,required:""},on:{change:function(t){return e.daysInMonth(e.birthMonth,e.birthYear)}},scopedSlots:e._u([{key:"first",fn:function(){return[t("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v("Mes ")])]},proxy:!0}]),model:{value:e.birthMonth,callback:function(t){e.birthMonth=t},expression:"birthMonth"}})],1),t("b-col",{staticClass:"px-3 py-1",attrs:{cols:"12",md:"4"}},[t("b-form-select",{attrs:{id:"birthDay",options:e.dayOptions,required:"",disabled:!e.birthMonth||!e.birthYear},scopedSlots:e._u([{key:"first",fn:function(){return[t("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v("Día ")])]},proxy:!0}]),model:{value:e.birthDay,callback:function(t){e.birthDay=t},expression:"birthDay"}})],1)],1)],1)],1)],1),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"6"}},[t("b-form-group",{attrs:{id:"input-group-8",label:"Ingrese su número de WhatsApp:","label-for":"phoneNumber"}},[t("b-input-group",[t("b-input-group-prepend",{attrs:{"is-text":""}},[t("b-icon",{staticClass:"text-primary",attrs:{icon:"whatsapp"}})],1),t("b-form-input",{attrs:{id:"phoneNumber",type:"tel",required:"",trim:"",placeholder:"Ingrese su número de teléfono",autocomplete:"off",maxlength:"10",formatter:e.formatPhoneNumber},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1)],1)],1)],1)],1),t("hr",{staticClass:"bg-primary"}),t("b-card",[t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"4"}},[t("b-form-group",{attrs:{id:"input-group-8",label:"Estatura actual en centímetros (sin zapatos, con los talones pegados a la pared y viendo al frente):","label-for":"height","invalid-feedback":"Por favor, ingrese su estatura en centímetros."}},[t("b-input-group",{attrs:{append:"cm"}},[t("b-form-input",{attrs:{id:"height",type:"number",required:"",trim:"",placeholder:"Ejemplo: 178",autocomplete:"off",min:"0"},model:{value:e.height,callback:function(t){e.height=e._n(t)},expression:"height"}})],1)],1)],1),t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"4"}},[t("b-form-group",{attrs:{id:"input-group-9",label:"Circunferencia exacta de la muñeca derecha con centímetros y milímetros (utilice una cinta métrica sin apretar la muñeca):","label-for":"wristCircumference"}},[t("b-input-group",{attrs:{append:"cm"}},[t("b-form-input",{attrs:{id:"wristCircumference",type:"number",required:"",trim:"",placeholder:"Ejemplo: 17.2",autocomplete:"off",min:"0",step:"0.1"},model:{value:e.wristCircumference,callback:function(t){e.wristCircumference=e._n(t)},expression:"wristCircumference"}})],1)],1)],1),t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"4"}},[t("b-form-group",{attrs:{id:"input-group-10",label:"Circunferencia exacta de la cintura con centímetros y milímetros (utilice una cinta métrica a nivel del ombligo sin oprimir la piel):","label-for":"waistCircumference"}},[t("b-input-group",{attrs:{append:"cm"}},[t("b-form-input",{attrs:{id:"waistCircumference",type:"number",required:"",trim:"",placeholder:"Ejemplo: 102.6",autocomplete:"off",min:"0",step:"0.1"},model:{value:e.waistCircumference,callback:function(t){e.waistCircumference=e._n(t)},expression:"waistCircumference"}})],1)],1)],1)],1),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"6"}},[t("b-form-group",{attrs:{id:"input-group-11",label:"Peso corporal exacto actual con kilogramos y gramos (pésese en ayunas, sin zapatos, y envíe la fotografía de su peso sobre la báscula digital):","label-for":"weight"}},[t("b-input-group",{attrs:{append:"kg"}},[t("b-form-input",{attrs:{id:"weight",type:"number",required:"",trim:"",placeholder:"Ejemplo: 95.7",autocomplete:"off",min:"0",step:"0.1"},model:{value:e.weight,callback:function(t){e.weight=e._n(t)},expression:"weight"}})],1)],1)],1),t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"6"}},[t("b-form-group",{attrs:{id:"input-group-12",label:"Peso corporal deseado en kilogramos (díganos cuál es el peso con el que se sentiría feliz):","label-for":"desiredWeight"}},[t("b-input-group",{attrs:{append:"kg"}},[t("b-form-input",{attrs:{id:"desiredWeight",type:"number",required:"",trim:"",placeholder:"Ejemplo: 75.5",autocomplete:"off",min:"0",step:"0.1"},model:{value:e.desiredWeight,callback:function(t){e.desiredWeight=e._n(t)},expression:"desiredWeight"}})],1)],1)],1)],1)],1),t("hr",{staticClass:"bg-primary"}),t("b-card",[t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2"},[t("b-form-group",{attrs:{id:"input-group-13",label:"Arrastre y ordene en qué momento del día prefiere comer más, siendo 1 el principal momento de alimentación:","label-for":"mealPreferences"}},[t("draggable",{attrs:{options:{animation:300}},model:{value:e.mealPreferences,callback:function(t){e.mealPreferences=t},expression:"mealPreferences"}},[t("transition-group",{attrs:{tag:"div",name:"list"}},e._l(e.mealPreferences,(function(r,a){return t("b-list-group-item",{key:r,staticClass:"d-flex justify-content-between align-items-center rounded border-primary"},[e._v(" "+e._s(a+1)+". "+e._s(r)+" "),t("b-icon",{staticClass:"ml-3",attrs:{icon:"arrows-move"}})],1)})),1)],1)],1)],1)],1),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"6"}},[t("b-form-group",{attrs:{id:"input-group-14",label:"Indique en qué momento del día desea comer un snack para satisfacer su antojo o apetito entre comidas:","label-for":"snackPreferences"}},[t("b-form-checkbox-group",{attrs:{id:"snackPreferences",options:e.snackTimeOptions},model:{value:e.snackPreferences,callback:function(t){e.snackPreferences=t},expression:"snackPreferences"}})],1)],1),t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12",md:"6"}},[t("b-form-group",{attrs:{id:"input-group-15",label:"Cuéntenos cuáles son sus bebidas acostumbradas o preferidas durante el día:","label-for":"beverages"}},[t("b-form-textarea",{attrs:{id:"beverages",required:"",trim:"","no-resize":"",rows:"3",placeholder:"Ejemplo: agua de frutas, leche, refresco, jugo, cerveza, etc.",maxlength:"100",minlength:"2"},model:{value:e.beverages,callback:function(t){e.beverages=t},expression:"beverages"}})],1)],1)],1),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2"},[t("b-form-group",{attrs:{id:"input-group-16",label:"Finalmente, relate si presenta alguna enfermedad, padecimiento, o dolor físico y cuál es:","label-for":"diseases"}},[t("b-form-textarea",{attrs:{id:"diseases",trim:"","no-resize":"",rows:"3",placeholder:"Ejemplo: diabetes, hipertensión, colesterol alto, dolor de cabeza, etc.",maxlength:"100"},model:{value:e.diseases,callback:function(t){e.diseases=t},expression:"diseases"}})],1)],1)],1),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2"},[t("b-form-group",{attrs:{id:"input-group-17",label:"¿Toma algún medicamento o suplemento alimenticio? Si es así, mencione cuál y para qué:","label-for":"medicines"}},[t("b-form-textarea",{attrs:{id:"medicines",trim:"","no-resize":"",rows:"3",placeholder:"Ejemplo: metformina, complejo B, vitamina C, etc.",maxlength:"100"},model:{value:e.medicines,callback:function(t){e.medicines=t},expression:"medicines"}})],1)],1)],1)],1),t("hr",{staticClass:"bg-primary"}),t("b-card",[t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2",attrs:{cols:"12"}},[t("p",{staticClass:"text-justify"},[t("b-icon",{staticClass:"text-warning",attrs:{icon:"exclamation-triangle"}}),t("small",[t("b",[e._v(" Aviso:")]),e._v(" Al terminar de rellenar el formulario, presione el botón "),t("i",[e._v('"Descargar formulario"')]),e._v(" para obtener un archivo PDF con la información proporcionada. Posteriormente, envíe el archivo a su dietista vía WhatsApp. ")])],1)]),t("b-col",{staticClass:"px-3",attrs:{cols:"12"}},[t("b-button",{attrs:{block:"",type:"submit",variant:"primary"}},[e._v("Descargar formulario")])],1)],1)],1),t("hr",{staticClass:"bg-primary"}),t("b-row",{attrs:{"no-gutters":""}},[t("b-col",{staticClass:"px-3 my-2"},[t("p",{staticClass:"text-justify"},[t("small",[e._v(" Gracias por tu preferencia. Te invitamos a conocer nuestros Términos y Condiciones, así como nuestra lista de precios en nuestra página web: "),t("a",{attrs:{href:"https://www.dietec.mx",target:"_blank"}},[e._v("www.dietec.mx")]),e._v(". Si tienes alguna duda o aclaración únicamente para servicio al cliente, comunícate en WhatsApp al número: "),t("b",[e._v("55 4853 2458")]),e._v(". ")])])])],1)],1)],1)],1)],1)},s=[],l=(r(4114),r(1527)),u=r.n(l),c=r(1749),m=a["default"].extend({name:"FormPage",components:{draggable:u()},data(){return{fullName:"",occupation:"",state:null,city:"",sex:"",exercise:"",birthYear:null,birthMonth:null,birthDay:null,phoneNumber:"",height:null,wristCircumference:null,waistCircumference:null,weight:null,desiredWeight:null,mealPreferences:["Desayuno","Comida","Cena"],snackPreferences:[],beverages:"",diseases:"",medicines:"",yearOptions:[],monthOptions:[{value:0,text:"Enero"},{value:1,text:"Febrero"},{value:2,text:"Marzo"},{value:3,text:"Abril"},{value:4,text:"Mayo"},{value:5,text:"Junio"},{value:6,text:"Julio"},{value:7,text:"Agosto"},{value:8,text:"Septiembre"},{value:9,text:"Octubre"},{value:10,text:"Noviembre"},{value:11,text:"Diciembre"}],dayOptions:[],statesOptions:[{value:"Aguascalientes",text:"Aguascalientes"},{value:"Baja California",text:"Baja California"},{value:"Baja California Sur",text:"Baja California Sur"},{value:"Campeche",text:"Campeche"},{value:"Chiapas",text:"Chiapas"},{value:"Chihuahua",text:"Chihuahua"},{value:"Ciudad de México",text:"Ciudad de México"},{value:"Coahuila",text:"Coahuila"},{value:"Colima",text:"Colima"},{value:"Durango",text:"Durango"},{value:"Guanajuato",text:"Guanajuato"},{value:"Guerrero",text:"Guerrero"},{value:"Hidalgo",text:"Hidalgo"},{value:"Jalisco",text:"Jalisco"},{value:"México",text:"México"},{value:"Michoacán",text:"Michoacán"},{value:"Morelos",text:"Morelos"},{value:"Nayarit",text:"Nayarit"},{value:"Nuevo León",text:"Nuevo León"},{value:"Oaxaca",text:"Oaxaca"},{value:"Puebla",text:"Puebla"},{value:"Querétaro",text:"Querétaro"},{value:"Quintana Roo",text:"Quintana Roo"},{value:"San Luis Potosí",text:"San Luis Potosí"},{value:"Sinaloa",text:"Sinaloa"},{value:"Sonora",text:"Sonora"},{value:"Tabasco",text:"Tabasco"},{value:"Tamaulipas",text:"Tamaulipas"},{value:"Tlaxcala",text:"Tlaxcala"},{value:"Veracruz",text:"Veracruz"},{value:"Yucatán",text:"Yucatán"},{value:"Zacatecas",text:"Zacatecas"}],gendersOptions:[{value:"Masculino",text:"Masculino"},{value:"Femenino",text:"Femenino"}],snackTimeOptions:[{value:"A media mañana",text:"A media mañana"},{value:"A media tarde",text:"A media tarde"}]}},methods:{onSubmit(){this.generatePDF(),this.showDownloadConfirmation()},getFirstName(){return this.fullName.split(" ")[0]},getFullBirthDate(){const e=this.changeMonthNumberToName(Number(this.birthMonth));return`${this.birthDay} de ${e} de ${this.birthYear}`},changeMonthNumberToName(e){return this.monthOptions[e].text},formatNameForFile(){let e=this.fullName.normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e=e.replace(/ /g,"_").replace(/[^a-zA-Z0-9_]/g,""),e},formatPhoneNumber(e){let t=e.replace(/\D/g,"");return t.length>10&&(t=t.substring(0,10)),t},showDownloadConfirmation(){this.$swal({toast:!0,position:"top-end",title:"¡Listo!",text:`¡Gracias, ${this.getFirstName()}! Su formulario ha sido descargado con éxito, ahora solo envíelo a su dietista vía WhatsApp.`,icon:"success",iconColor:"#ff6600",showConfirmButton:!1,timer:5e3,timerProgressBar:!0,background:"#fff9f3"})},generatePDF(){const e=new c.uE;e.setFontSize(20),e.setTextColor("#ff6600"),e.text("Formulario de registro",105,10,{align:"center"}),e.setFontSize(16),e.text("Datos personales",10,20),e.setFontSize(12),e.setTextColor("#000000"),e.text(`Nombre completo: ${this.fullName}`,10,30),e.text(`Ocupación: ${this.occupation}`,10,40),e.text(`Estado: ${this.state}`,10,50),e.text(`Ciudad: ${this.city}`,10,60),e.text(`Sexo de nacimiento: ${this.sex}`,10,70),e.text(`¿Practica ejercicio?: ${this.exercise}`,10,80),e.text(`Fecha de nacimiento: ${this.getFullBirthDate()}`,10,90),e.text(`Número de teléfono: ${this.phoneNumber}`,10,100),e.setFontSize(16),e.setTextColor("#ff6600"),e.text("Datos físicos",10,110),e.setFontSize(12),e.setTextColor("#000000"),e.text(`Estatura: ${this.height} cm`,10,120),e.text(`Circunferencia de la muñeca: ${this.wristCircumference} cm`,10,130),e.text(`Circunferencia de la cintura: ${this.waistCircumference} cm`,10,140),e.text(`Peso corporal: ${this.weight} kg`,10,150),e.text(`Peso deseado: ${this.desiredWeight} kg`,10,160),e.setFontSize(16),e.setTextColor("#ff6600"),e.text("Preferencias alimenticias y otros datos",10,170),e.setFontSize(12),e.setTextColor("#000000"),e.text(`Momentos de comida (mayor a menor): ${this.mealPreferences.join(", ")}`,10,180),e.text(`Snacks: ${this.snackPreferences?this.snackPreferences.join(", "):"N/A"}`,10,190),e.text(`Bebidas: ${this.beverages}`,10,200),e.text(`Enfermedades: ${this.diseases?this.diseases:"N/A"}`,10,210),e.text(`Medicamentos: ${this.medicines?this.medicines:"N/A"}`,10,220),e.save(`DIETEC_Formulario_${this.formatNameForFile()}.pdf`)},generateYears(){const e=(new Date).getFullYear()-15,t=[];for(let r=e;r>=e-120;r--)t.push({value:r.toString(),text:r.toString()});this.yearOptions=t},daysInMonth(e,t){const r=[],a=new Date(Number(t),Number(e)+1,0).getDate();for(let o=1;o<=a;o++)r.push({value:o.toString(),text:o.toString()});this.dayOptions=r}},mounted(){this.generateYears()}}),p=m,d=r(1656),f=(0,d.A)(p,n,s,!1,null,"97b51970",null),b=f.exports,h=a["default"].extend({name:"App",components:{FormPage:b}}),g=h,x=(0,d.A)(g,o,i,!1,null,null,null),v=x.exports,y=r(1641),w=r(4486),C=r(5329);a["default"].use(y.vGs),a["default"].use(w.YS);const j={confirmButtonColor:"#ff6600",cancelButtonColor:"#d03636"};a["default"].use(C.A,j),a["default"].config.productionTip=!1,new a["default"]({render:e=>e(v)}).$mount("#app")},3153:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAt1BMVEX/////ZgD/YgD/XgD/XQD/YQD/VgD/WgD/vqP/kV7/pX7/cCb/yLb/n3X/VQD/dSr/kGP/+PL/bRH/iVH/1cP/dTH/p4f/gkT/rYv/5tv/3tD/up3/x6//rpH/ciH/i1X/n3v/7un/49r/zb3/9/X/mXL/mWz/zrn/tZb/7uT/18r/pXz/xKr/4dP/lGL/1Mb/fjr/gkz/g0T/nG7/eSr/vZ//hVL/ezX/v6r/tJL/rIb/SQD/ybAz+QQwAAAO3UlEQVR4nO2dCVfiPBfH26wqWBYRBAZZrIiM4zK+gzyO3/9zvUlp0rRN0xRx6JzJ75znmWPpEv5kubn3JvU8h8PhcDgcDofD4XA4HA6Hw7En4Zxz7FL81YzGy0sSAwezplNzD27ahEIMfAHAiPj9xbGL9XcR9ilNJEzApNE8dtn+IvoB1Ii4q5bId0ra8QQLVYygA9dRWnBLjCryOklvjl3I+jNAZTIygsmxi1l3WthCRt8n/WMXtN682MnIhNweu6h15sqmUcdNe3jswtaXYWAtow8axy5tfRnobO8iqLMjC1iUWjxpjl3eujKzHWTiCjk6doFrSpVWzcDO9tESVmzWYHDsEteTqt0j6B67xDUFV2vYdHbsAteUeSsg9gS3xy7vH2PBqObjCvl/YZg/Hho+1DE+0fBwf1/0XHH+gzhyp7uBwl101lD7nBS/dvfr/TKf9qAtV+fjfEBoBGmdnhQVPwW4vvG8PuHCh/MhY75Yj55utpMZDyc83T55iyaPK9wsp9Pb/mq7nRh+o99QA6K0e97Tljc+n8o+94Lq7iChFzu1A+NZ/Jlwd79zYj5N19kPpwglnR0AiP7vrlTGEQGkP0XAnzUoiX8DShFCEEM6uaQYNQgi19tnigHAmH+XWfHdisYsgGn3PV+lO/H5oCWOnJo7azDd6WjhENjd78xsHIPrvIqnJFcGQK/LlGyyIkXi64YbeQxAJfRlMHwMYz+A9NtfoONVXsXoRHJh1vGJ5i4pfGj8z+VeOjJotiz107FVeGcMfph0HAaAtVfWhbEugQcLAW1gxBsia8a7R0Hextk5lDVyzE9u76ujj3G6y66bjj+6hscDahRy07ic9rfrdbN9Ol+QYMrGlBOCN7fL9ltAIaXtk2bzpN9uzEbeaLZsvzwHhjBNmU0P0kLWTMehNuqcYBbSwNO4YmhL6ogFmZIBqApZWUcsxmuMNU9QDkK8u18lHVtlMxIbIcMURWet12srHc9ivvtditTiAdSx0rGrxT+NzvpxfpZwIS5pvStHv2d01N+v+z9VRpwqJ+HXEJQ+WGxGhwOEcW7a0tAGYsaI20QG+1HoCJRj93cpSwI82+hIrWzfiIc47g50I6rQkRp//t2pSmeByfRbVIL73nsX6QufYabta5jxOctm9WxxdCo2zAx1OjI6F4pVQD+S48U62seBTqx01M4DVO6Vvp2cKo3Ge1AaFP1VdH3hEIXJmxpDuLmOtbCxe0D2g2+KkMmHddLxZ6IDyhjdnZZMNQFBUcs2jfQI9uNGPLqUYxnYFBemUEdvnfzcaCwLWB8dR0n5NM8+R7Egvn5C7pW5w3GweWIGwUbp4fZo11FBkxopP62RjkmwD+oe3YpM62IVmY4lgz2g3XZqroTPim9m0NFbSSHll6qPjknvSLVadZCpLnJufBpEDgo2bVFQTDEY+WAQh/swfuemyQkmHb1n8WvgpShdbXQ8EaNtUpQ0H9io4o5wPh+tb7bb7UTSn8WcsT9W7KPtDWPEMLk2jTomLTt2atVIR/kbk33nLAfFqGNSWDEvqI2OHWFtgzfr52YJ++0qGDOlzDqOhfmA4q7hIHa4nY5mO3wtmgocG88z0UCgCsSUBGnWUXbmYqgq1hEMLjS8rDR3tdIRPOvu91MYitLxQex/vywVsqSiEhncZiU6evIej7u/DfNr7W+IzjU3tdJRfz96Ep/2LmfRNorpuawWdzXW/BIdhUNFxMCr+nu0JpedjvrvInRcimq7f/foTcz59VmIaTFNiY6yldVWx2I/RCnVEirM6RQlOn6vu45Q1wHbUqlhI+OA9k/ruK6Sj1ugUMxf366n5XIV07du2SAwLzUs0fHCfpyBVEOw/3itv5/wJh5inGGMCcIWpiOmfsmKTVu75+fu72Id4UNPh27SZqUjXGnvJ6zFVxl+KNXKSLhdvlyWsZmVRr1K7HAxa8DvuwO1mRcmdnjHeN6fwqyjLK2wQeunIzI4s/4gZh2lr1R8q9ro2JEFL0k/yRK2G58n77Iw6pj4Skmm+EfXMQldV5xgd23GlTLymRVGHWUkSX7j+uh4JSZ1+Lv+hN6FTuCwonNCD8y5fkw63snqKDuh+ug4lD7mQL+upQXJY17JqosUDqCjsvpOuMNrpGMSfgbXusjqK+SB6Mdsqf68jp0kTg5l06mRjh+yQoLrvO3zsCsoztbJP67jnRJyTGy0Gumo5EPgnJBnUmT8Ox2eOoiOKDdgF+WlPCrPk87TeunYU+Lr6djr/VuSuoNP01ctjfN3S/I5Glode6+B8jSspEXXJj7D+akUkra+iQL0HtXoPcpU1fkBBmyYT6yQ1e77ueAN0PRvpihkiM88nmv5b08dwan+fqqVo+TA8zwxn19yjVOlJ7l0+9WnWzbQxDLyeaTZRNJAbWCm+AzWgTRaWcZntPeDql9imAkMgFzpqeZnPPtkjYS+JiGg9MchH+rp++Y176Fjwf1S+bijEkmQ1jv55NO9O0kA9evjSnQEfrpd1ExH78G41pKeah7Aabb9wqWF/Ia06EM6KFjUZdYRdTOjR910NGbak/cCGY1cgn1W/pt0xPmC1E5Hr/OcW0+0A+JSy0lDGDId0U3lHc0KdWQdwWvelKmfjmxiA1C+DJjoIhpGFuMlX0jM74UIQdU20gw0XiGIEIVvY52juROfj+XXmUKjhwnqxmta/Jl3Zk66wbo4wolPUiYQRvS8opt8fYtS22hGdyFd0xLXFBenea4eHoYFxeiI81/FkXfNDVQ0fdTdNP5MF0wcT423O11qrvG8H1eDaLVqFBy7Pv+oqOK2qx/BWaPc/HO7pIxGo4f/2P/sFp4rNH1NxyClJC9u+0cb5oOCgUoqGbgNZ8ppppcdAwyjpeypg6jhqmQJM9VgwZQ8z1bbZnPcn0J16AKk3GvyTzNNHGyA4r46psxPLpWqGtQjvFtTXhJHB73cxQDn64UXPu2yUBbtQCoZuI00C2lLGTHkKwrD7YaSYOWFvym5nHAth8lsKXg6dnHrirLOiqd+s9rHu0Q48eaUm47kkmu7lS6lwA02WhKnG2+zoWzDqN+IN6igDTa8DMX6OZ371qGs0+QttkmSCY2yFVAwYwo3RErd7NhFriMzqMhY6COHfFtcEZksyDj4p5FZDoT3gouiOU20K24oHFSGhez707t6ZHyzW9539y2m17H3IYzERd9GB89y3CiNdV24xytfe7QOZSL5F7wgYPRGoiW2iLTK9xLzvDeKdlAC32yXsr0TJK96PmybEms++HbW29/bUbegPoLhU/DieX0ozz4sv9joFjmpIJs0nZbXlgHw0W4jNggAslnS60U5ZXiXF84uCjShv/25jesfWfCINix2VVDk05VM8LaIqlfinrIZ/fi+0+ld+din5YuBBgD1wk6nM7w7eabAJ482T7mCcOWxizo/xi2cDgB/FlEd2zaraJjleEPl+YfkEScL+5aBxZqqAUiCR7036CMbIZmOsgtogU8uTUjRjOfVZOg1S9xmDL6xWTxmk/J7V6ELlLzsO4vUHlXHyD2gi9BnUXWcIz843GDTji3tF8P2M2qFHHrbnfLooCNNJ6iSF8VJ6+hNsU/Kp1mqjt41QB+Gc6sR10GmyrqsOvLpDJ6JnsC0Z0p1OtRH1XqrjI4dNkpdlV6U0vERZHfp2R9hLgZl+WcAkQ2vu1RW4cNufv0MQDZFwExGR28MNRHULCkdkUUqny1xI+XN2lAdMSWnzXlk8rBxerszfUjl8I+JD8LMne8VlMzq2LHp7lQd71AuBW9/YqsbTgonMgBSOOPzbojTZx74LQtLymPtrZVtL5nV0WPWUmkzZTqKFNZRPiP0E0yB6B63us3iACSNCS/uXLgfeTrDbk6DDvz6lO/cQcJ+Nf8/q1qS03Fp0d1dQXA6XnGmzF4FhxuuYw8OXXj9vI4oGJzsxsC+dIdjKEzxT+wrouf+FdDI72mVjpTT0WbYYPMZsNvkCWDyvP+GHjniWsZMhkk7O86AZtwDPgHpLoftjdiE5yve+tG7ivIQqD7HIUVOxwtLHXnuKPtyy0NOZqSOXLFMD4ni8EG4UfbJi4zG6ZfpyBi+8lleeTAtpyO12HM17h97xEeH3TRK1XGdbtnxhGWlhrVhFONqf6WOrH2XbYERkdXxB7VY8SvG61dctD58TxIdb/1MBxnVvdF1+ijq0q9s1zt61GKtZFbHR2yx04m0e5CyFOoQxDrycSa39wzcrm+D7FwRYDHOfOFbkYDFHC+j45AUbDeYQur4QavOQ82IaeGTzu6BmtwzvhUp+QIdU3thw+o6toBN9C2xw/n8qVoJjcQ6wlVxQCENUy9eGHpYHcFF0rk9IL/ctEvpeP+MrSZ5iY4/iLqq7NMI63pjnBcqUFlzD6lj2MIYia/Fukdc7kwcJJv0d96Z2WlldCrzwjPoo8MZkEI8It0PZTrKEw9aH6esr0D0gr9XZ8BmGtQmroDfo/fw/DeFzCoMrFxgio6dg84LhY5scM6/9kPXrG/lNYdt13cIgd1cA/i0ZeXH9XEUsYKAzV5/2lUt1U/xQDVr3PZFaMcbtk11JAvpQT/0eP0wIDTaf9cv3Ohc5U2+cQheXNkOvWdBkGy79ZPdYZ+C6kiSn+Y2cQXuXxNRnC+we26eGH/l64yT1dlL6bQwwNSWzd+9VVMhqYLB0FsEPiRFXnHAGhya8KiG0zGPsgL+0vMmv8cynp2VccNk5qdIc93pqKB0ibyy3SSB2Aw8wLWY8yrrdNSgDi1Rnu2i6H1NkfUfqrsjOB0TUkM03/f2tmidJQZh+rVLTkeFtKnDhdwqLh5FNcLzUBpq3+l0VMiYjEGTL+sSnlvYFslnCLCec55OuHA6KmRNbzJjB9eDaOkRjkOsmPrcDd7MLJR3OirkpjCwy0eb4eSS0GAcrfvwZzxFb77JdpxOR4X8VBCQwS61kb9jONyuo5jhPO8Ydzqq6KbUgHYn6iQ3bG4CjXHudFTQuyZ4Lsr0anvTbDZXtw2iX5TtdFQodvHs1g1nFw47HfXYBROcjmU4HQ9DgPaGGF6+98/R/ARubZzD4XA4HA6Hw+FwOBwOh8PhcHwN/wdz+x9LvQvKHAAAAABJRU5ErkJggg=="}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,i){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&i||n>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(s=!1,i<n&&(n=i));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(a,o){if(1&o&&(a=this(a)),8&o)return a;if("object"===typeof a&&a){if(4&o&&a.__esModule)return a;if(16&o&&"function"===typeof a.then)return a}var i=Object.create(null);r.r(i);var n={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&a;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){n[e]=function(){return a[e]}}));return n["default"]=function(){return a},r.d(i,n),i}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{125:"e0dfac0a",179:"68435a6c",427:"a1b9430d"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dietec-form:";r.l=function(a,o,i,n){if(e[a])e[a].push(o);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var m=u[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+i){s=m;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+i),s.src=a),e[a]=[o];var p=function(t,r){s.onerror=s.onload=null,clearTimeout(d);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={524:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=i);var n=r.p+r.u(t),s=new Error,l=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",s.name="ChunkLoadError",s.type=i,s.request=n,o[1](s)}};r.l(n,l,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,n=a[0],s=a[1],l=a[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var c=l(r)}for(t&&t(a);u<n.length;u++)i=n[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},a=self["webpackChunkdietec_form"]=self["webpackChunkdietec_form"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[504],(function(){return r(1070)}));a=r.O(a)})();
//# sourceMappingURL=app.fb10547d.js.map