"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[751],{3867:function(e,n,r){r.d(n,{$3:function(){return a},KL:function(){return o},p7:function(){return i}});var t=r(6727),a=t.Ry().shape({name:t.Z_().min(3,"Too Short !").max(20,"Too Long !").matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'"}).required("Please enter your name"),email:t.Z_().email("Enter a Vaid Email").required("Email is Required"),password:t.Z_().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(20,"Too long")}),o=t.Ry().shape({email:t.Z_().email("Enter a Vaid Email").required("Email is Required"),password:t.Z_().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(20,"Too long")}),i=t.Ry().shape({name:t.Z_().min(2,"Too Short!").max(20,"Too Long!").matches(/(^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$)/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'"}).required("Name is required"),number:t.Z_().min(12,"Too Short!").max(20,"Too Long!").matches(/^[+0-9-]+$/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}).required("Phone number is required")})},5751:function(e,n,r){r.r(n),r.d(n,{default:function(){return ae}});var t=r(9439),a=r(2791),o=r(9434),i=r(6907),s=r(4751),d=r(6916),l=function(e){return e.filter},c=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},u=(0,d.P1)([c,l],(function(e,n){var r=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(r)}))})),h=r(8870),x=r(890),p=r(6151),b=r(5206),f=r(9333),Z=r(6259),j=r(6112),g=r(9877),v=r(1286),y=r(7299),w=r(2739),C=r(2003),A=r(5705),P=r(5527),k=r(1889),S=r(8096),W=r(4925),T=r(4527),F=r(3466),z=r(7071),L=r(3867),q=r(3833),B=r(3618),N=r(184),R=function(e){var n=e.onClose,r=e.id,t=e.name,a=e.number,i=(0,o.I0)(),d=(0,A.TA)({initialValues:{name:t,number:a},validationSchema:L.p7,onSubmit:function(e,o){var d=o.resetForm;console.log(e),t.trim().toLowerCase()!==e.name.trim().toLowerCase()||a!==e.number?(i((0,s.Tk)({id:r,values:e})).unwrap().then((function(){n()})).catch((function(){return b.Am.error("Oops, something went wrong. Please try again")})),d()):b.Am.error("Please make changes to the contact")}});return(0,N.jsx)(P.Z,{elevation:3,sx:{p:2},children:(0,N.jsxs)("form",{onSubmit:d.handleSubmit,children:[(0,N.jsxs)(k.ZP,{container:!0,spacing:4,children:[(0,N.jsx)(k.ZP,{item:!0,xs:12}),(0,N.jsx)(k.ZP,{item:!0,xs:12,children:(0,N.jsxs)(S.Z,{variant:"filled",fullWidth:!0,children:[(0,N.jsx)(W.Z,{htmlFor:"name",children:"Name"}),(0,N.jsx)(T.Z,{endAdornment:(0,N.jsx)(F.Z,{position:"end",children:(0,N.jsx)(q.Z,{})}),fullWidth:!0,autoFocus:!0,id:"name",value:d.values.name,onChange:d.handleChange,type:"name",label:"Name",error:d.touched.name&&Boolean(d.errors.name)}),(0,N.jsx)(z.Z,{error:!0,children:d.touched.name&&d.errors.name})]})}),(0,N.jsx)(k.ZP,{item:!0,xs:12}),(0,N.jsx)(k.ZP,{item:!0,xs:12,children:(0,N.jsxs)(S.Z,{variant:"filled",fullWidth:!0,children:[(0,N.jsx)(W.Z,{htmlFor:"number",children:"Number"}),(0,N.jsx)(T.Z,{endAdornment:(0,N.jsx)(F.Z,{position:"end",children:(0,N.jsx)(B.Z,{})}),fullWidth:!0,id:"number",value:d.values.number,onChange:d.handleChange,type:"text",label:"Number",error:d.touched.number&&Boolean(d.errors.number)}),(0,N.jsx)(z.Z,{error:!0,children:d.touched.number&&d.errors.number})]})})]}),(0,N.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Update contact"})]})})},_={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:400,width:300,bgcolor:"background.paper",boxShadow:24,p:"20px",zIndex:1e3,borderRadius:"15px"},E=function(e){var n=e.isOpenModal,r=e.onClose,t=e.id,a=e.name,o=e.number;return(0,N.jsx)(y.Z,{open:n,onClose:r,closeAfterTransition:!0,BackdropComponent:w.Z,BackdropProps:{timeout:500},"aria-labelledby":"spring-modal-name","aria-describedby":"spring-modal-number",children:(0,N.jsx)(C.Z,{in:n,children:(0,N.jsx)(h.Z,{sx:_,children:(0,N.jsx)(R,{onClose:r,id:t,name:a,number:o})})})})},I=r(418),M=r(383),O=r(5546),V=function(e){var n=e.id,r=e.name,i=e.number,d=(0,I.Z)(),l=(0,a.useState)(!1),c=(0,t.Z)(l,2),m=c[0],u=c[1],h=(0,o.I0)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(f.Z,{children:(0,N.jsx)(O.ZP,{color:"teal",name:r,size:"40",round:!0,textSizeRatio:3})}),(0,N.jsx)(Z.Z,{primary:(0,N.jsx)(x.Z,{type:"body2",style:{color:"dark"===d.palette.mode?"#cfd8dc":"#455a64",fontWeight:"600"},children:r}),secondary:(0,N.jsx)(x.Z,{type:"body2",style:{color:"dark"===d.palette.mode?"#cfd8dc":"#455a64"},children:i})}),(0,N.jsxs)(j.Z,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},mr:{xs:"-10px",md:"0"}},children:[(0,N.jsx)(g.Z,{"aria-label":"edit contact",onClick:function(){return u(!0)},edge:"end",sx:{bgcolor:"dark"===d.palette.mode?"#6fa8ad":"#bbd6d8",mb:{xs:"5px",md:"0"},mr:{md:"10px"},width:{xs:"40px",md:"60px"},height:{xs:"40px",md:"60px"}},children:(0,N.jsx)(v.Z,{})}),(0,N.jsx)(g.Z,{"aria-label":"delete contact",onClick:function(){return h((0,s.GK)(n)).unwrap().then((function(){return b.Am.success("The contact was successfully deleted from the phone book")})).catch((function(){return b.Am.error("Something went wrong, please try again")}))},edge:"end",sx:{bgcolor:"dark"===d.palette.mode?"#792f59":"#fd6292",width:{xs:"40px",md:"60px"},height:{xs:"40px",md:"60px"}},children:(0,N.jsx)(M.Z,{})})]}),(0,N.jsx)(E,{isOpenModal:m,onClose:function(){return u(!1)},id:n,name:r,number:i})]})},$=r(266),G=r(493),K=r(6535),Y=function(){var e=(0,o.v9)(u),n=(0,I.Z)();return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(h.Z,{sx:{flexGrow:1,maxWidth:"800px",m:"10px auto 0 auto"},children:0===e.length?(0,N.jsx)($.Z,{sx:{m:"25px auto 15px auto"},maxWidth:"sm",children:(0,N.jsx)(x.Z,{variant:"h5",component:"h2",gutterBottom:!0,children:"There is no such contact in your phonebook"})}):(0,N.jsx)(G.Z,{dense:!1,sx:{width:"100%"},children:e.map((function(e){var r=e.id,t=e.name,a=e.number;return(0,N.jsx)(K.ZP,{alignItems:"center",sx:{backgroundColor:"dark"===n.palette.mode?"#607d8b":"#ede7f6",borderRadius:"6px",boxShadow:6,mb:"8px",p:"15px"},children:(0,N.jsx)(V,{id:r,name:t,number:a},r)},r)}))})})})},J=r(1686),D=r(5299),U=r(8619),X=function(e){var n=e.onClose,r=(0,o.I0)(),t=(0,o.v9)(c),a=(0,A.TA)({initialValues:{name:"",number:""},validationSchema:L.p7,onSubmit:function(e,a){var o=a.resetForm,i=e.name,d=e.number,l=t.some((function(e){return e.name.toLowerCase()===i.toLowerCase()})),c=t.some((function(e){return e.number===d}));if(l)return o(),D.Report.failure("","".concat(i," is already in contact"));if(c){o();var m=t.find((function(e){return e.number===d})).name;return D.Report.failure("","".concat(d," is already in contact as ").concat(m))}r((0,s.uK)(e)).then((function(){b.Am.success("\u0421ontact was successfully added"),n()})).catch((function(){return b.Am.error("Oops, something went wrong. Please try again")})),o()}});return(0,N.jsx)(P.Z,{elevation:3,sx:{p:2},children:(0,N.jsxs)("form",{onSubmit:a.handleSubmit,children:[(0,N.jsxs)(k.ZP,{container:!0,spacing:2,children:[(0,N.jsx)(k.ZP,{item:!0,xs:12}),(0,N.jsx)(k.ZP,{item:!0,xs:12,children:(0,N.jsxs)(S.Z,{variant:"filled",fullWidth:!0,children:[(0,N.jsx)(W.Z,{htmlFor:"name",children:"Name"}),(0,N.jsx)(T.Z,{endAdornment:(0,N.jsx)(F.Z,{position:"end",children:(0,N.jsx)(q.Z,{})}),fullWidth:!0,autoFocus:!0,id:"name",value:a.values.name,onChange:a.handleChange,type:"name",label:"Name",error:a.touched.name&&Boolean(a.errors.name)}),(0,N.jsx)(z.Z,{error:!0,children:a.touched.name&&a.errors.name})]})}),(0,N.jsx)(k.ZP,{item:!0,xs:12}),(0,N.jsx)(k.ZP,{item:!0,xs:12,children:(0,N.jsxs)(S.Z,{variant:"filled",fullWidth:!0,children:[(0,N.jsx)(W.Z,{htmlFor:"number",children:"Number"}),(0,N.jsx)(T.Z,{endAdornment:(0,N.jsx)(F.Z,{position:"end",children:(0,N.jsx)(U.Z,{})}),fullWidth:!0,id:"number",value:a.values.number,onChange:a.handleChange,type:"text",label:"Number",error:a.touched.number&&Boolean(a.errors.number)}),(0,N.jsx)(z.Z,{error:!0,children:a.touched.number&&a.errors.number})]})})]}),(0,N.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})})},H={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:600,width:600,bgcolor:"background.paper",boxShadow:24,p:"20px",zIndex:1e3,borderRadius:"15px"},Q=function(e){var n=e.isOpenModal,r=e.onClose;return(0,N.jsx)("div",{children:(0,N.jsx)(y.Z,{open:n,onClose:r,closeAfterTransition:!0,BackdropComponent:w.Z,BackdropProps:{timeout:500},"aria-labelledby":"spring-modal-name","aria-describedby":"spring-modal-number",children:(0,N.jsx)(C.Z,{in:n,children:(0,N.jsx)(h.Z,{sx:H,children:(0,N.jsx)(X,{onClose:r})})})})})},ee=r(9585),ne=r(5403),re=function(){var e=(0,o.I0)(),n=(0,o.v9)(l);return(0,N.jsxs)(h.Z,{sx:{flexGrow:1,alignItems:"center",maxWidth:"600px",m:"10px auto 0 auto"},children:[(0,N.jsx)(k.ZP,{item:!0,xs:12}),(0,N.jsx)(k.ZP,{item:!0,xs:12,children:(0,N.jsx)(S.Z,{variant:"filled",fullWidth:!0,children:(0,N.jsx)(T.Z,{placeholder:"Find contact by name",startAdornment:(0,N.jsx)(F.Z,{position:"start",children:(0,N.jsx)(ne.Z,{})}),id:"name",value:n,onChange:function(n){return e((0,ee.T)(n.target.value))},type:"text",label:"Filter"})})})]})},te=r(6598);function ae(){var e=(0,I.Z)(),n=(0,a.useState)(!1),r=(0,t.Z)(n,2),d=r[0],l=r[1],u=(0,o.I0)(),b=(0,o.v9)(m),f=(0,o.v9)(c);return(0,a.useEffect)((function(){u((0,s.yF)())}),[u]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i.ql,{children:(0,N.jsx)("title",{children:"Your contacts"})}),(0,N.jsxs)(h.Z,{maxWidth:"xl",children:[(0,N.jsx)(te.Z,{display:"flex",children:0!==f.length&&(0,N.jsx)(re,{})}),(0,N.jsxs)(te.Z,{children:[0!==f.length?(0,N.jsx)(Y,{}):(0,N.jsx)(te.Z,{sx:{m:"25px auto 15px auto"},maxWidth:"sm",children:(0,N.jsx)(x.Z,{variant:"h5",component:"h2",gutterBottom:!0,children:"Please add the contact to your phonebook"})}),b?J.Loading.hourglass():J.Loading.remove(),(0,N.jsx)(p.Z,{variant:"contained","aria-label":"Add contact",color:"primary",size:"medium",sx:{position:"absolute",top:"1%",left:"50%",width:"90px",height:"50px",bgcolor:"dark"===e.palette.mode?"#468698":"#55a19e",transform:"translateX(-50%)"},onClick:function(){return l(!0)},children:(0,N.jsx)(x.Z,{component:"p",fontSize:12,fontWeight:"500",textTransform:"none",children:"Add contact"})}),(0,N.jsx)(Q,{isOpenModal:d,onClose:function(){return l(!1)}})]})]})]})}}}]);
//# sourceMappingURL=751.2c0d1b58.chunk.js.map