import theme from './theme'
export function styles() {
  return (
    <style jsx global>
      {`
				.headerTop {
					width: 100%;
					height: 30px;
					border-bottom: 1px solid #d8d8d8;
				}
				a{
					color: rgba(102,102,102,1)
				}
				.headerTop span {
					float: right;
					line-height: 30px;
					margin-right: 15px;
					cursor: pointer;
				}
				.headerNav {
					height: 75px;
					float: left;
				}
				.headerNav .left_title {
					float: left;
				}
				.headerNav .left_title img {
					float: left;
					margin: 10px;
				}
				.headerNav .left_title .left_title_txt {
					font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
					font-weight: 650;
					font-style: normal;
					font-size: 28px;
					text-align: left;
					float: left;
					line-height: 65px;
					color: #333333;
				}
				.headerNav .left_title .left_title_addr {
					line-height: 80px;
					float: left;
					margin-left: 5px;
				}
				p {
					font-size: 14px;
					line-height: 24px;
				}
				dl,
				p,
				h3 {
					margin: 0;
				}
				dd {
					-webkit-margin-start: 0;
				}
				ul {
					padding: 0;
					margin: 0;
				}
				 {
					/*theme ---start ----*/
				}
				html {
					font-size: 100px;
				}
				@media (max-width: 370px) {
					html {
						font-size: 90px;
					}
				}
				body {
					 {
						/*font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;*/
					}
					font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
					font-size: ${theme.fontsize};
					background-color: #f4f7f8;
					color: ${theme.fontcolor};
					font-weight: 300;
					margin: 0;
					display: inline-block;
					overflow: hidden;
				}
				.flex {
					display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
					display: -moz-box; /* 老版本语法: Firefox (buggy) */
					display: -ms-flexbox; /* 混合版本语法: IE 10 */
					display: -webkit-flex; /* 新版本语法: Chrome 21+ */
					display: flex;
				}
				.lr-flex {
					-webkit-justify-content: center;
					-moz-justify-content: center;
					-ms-justify-content: center;
					justify-content: center;
				}
				.tb-flex {
					-webkit-align-items: center;
					-moz-align-items: center;
					-ms-justify-content: center;
					align-items: center;
				}
				.left {
					float: left;
				}
				.right {
					// float: left;
				}
				.clearfix {
					content: '.';
					height: 0;
					display: block;
					visibility: hidden;
					clear: both;
				}
				a {
					text-decoration: none;
				}
				li {
					list-style: none;
				}
				.back-left {
					width: 0.08rem;
					height: 0.08rem;
					border-top: 0.03rem solid #c7c7cc;
					border-left: 0.03rem solid #c7c7cc;
				}
				.sanjiao {
					display: inline-block;
					width: 0;
					height: 0;
					border-left: 0.06rem solid transparent;
					border-right: 0.06rem solid transparent;
					border-top: 0.06rem solid ${theme.maincolor};
				}
				input:-webkit-autofill,
				textarea:-webkit-autofill,
				select:-webkit-autofill {
					background: transparent !important;
				}
				/*textoverflow*/
				.textoverflow1 {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
				.textoverflow2 {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				/*btn*/
				/*灰色系的按钮*/
				.btnBorder {
					text-align: center;
					color: ${theme.mainfontcolor};
					border: 1px solid ${theme.bordercolor};
					border-radius: 2px;
					background: #fff;
					font-size: ${theme.nfontsize};
					padding: 0.04rem 0.12rem;
				}
				.btnBorderMain {
					color: ${theme.maincolor};
					border: 1px solid ${theme.maincolor};
				}
				.btnBorderDisabled {
					color: ${theme.nfontcolor};
					background: #f2f2f2;
					border: 1px solid ${theme.bordercolor};
				}
				/*填充背景的圆按钮*/
				.btnBG {
					height: 0.42rem;
					line-height: 0.36rem;
					width: 100%;
					font-weight: 300;
					 {
						/* border-radius: 1rem; */
					}
					background: #f8f8f8;
					font-size: 0.18rem;
					border: 1px solid #ccc;
					color: ${theme.mainfontcolor};
					padding: 0;
				}
				.btnBGMain {
					background: ${theme.maincolor};
					border: 1px solid ${theme.maincolor};
					color: #fff;
				}
				.btnBGMainDisable {
					background: #7fa4c9;
					border: 1px solid #7fa4c9;
					color: #fff;
				}
				/* 灰色系按钮 */
				.btnBGGray {
					background: #f2f2f2;
					border: 1px solid #f2f2f2;
					color: ${theme.mainfontcolor};
				}
				.btnBGGrayDisable {
					background: #f2f2f2;
					border: 1px solid #f2f2f2;
					color: ${theme.nfontcolor};
				}
				.btnBGLitt {
					width: 0.5rem;
					height: 0.3rem;
					line-height: 0.3rem;
					font-size: 0.14rem;
					text-align: center;
					padding: 0;
				}
				/**
       * list item button
       */
				.btnList {
					background: #87b87f;
					font-size: 0.12rem;
					border: none;
					color: #fff;
					margin: 0 ${theme.midmargin};
					padding: 0.03rem 0.07rem;
				}
				.btnListDelete {
					background: #d15b47;
				}
				.btnListModify {
					background: #9585bf;
				}
				button {
					font-weight: 300;
				}
				button:active {
					background-color: #1b9db7;
					transition: background-color 0.3s;
				}
				button:focus {
					outline: none;
				}

				/**
       * input radio video
       */
				::-moz-placeholder {
					color: ${theme.nfontcolor};
				}
				::-webkit-input-placeholder {
					color: ${theme.nfontcolor};
				}
				:-ms-input-placeholder {
					color: ${theme.nfontcolor};
				}
				.radio,
				.checkbox {
					position: relative;
					width: 0.16rem;
					height: 0.16rem;
				}
				.radio label,
				.radio input,
				.radio label:before,
				.checkbox label,
				.checkbox input,
				.checkbox label:before {
					position: absolute;
					top: 0;
					left: 0;
					width: 0.16rem;
					height: 0.16rem;
					background: #f2f2f2;
					margin: 0 !important;
					border-radius: 2px;
				}
				.radio label:before,
				.checkbox label:before {
					content: '';
					background: ${theme.maincolor};
					opacity: 0;
				}
				.radio label:after,
				.checkbox label:after {
					content: '';
					position: absolute;
					width: 0.08rem;
					height: 0.04rem;
					border-left: 0.02rem solid #fff;
					border-bottom: 0.02rem solid #fff;
					transform: rotate(-45deg);
					top: 0.03rem;
					left: 0.03rem;
					opacity: 0;
				}
				.radio input[type='radio']:checked + label:before,
				.checkbox input[type='radio']:checked + label:before,
				.radio input[type='radio']:checked + label:after,
				.checkbox input[type='radio']:checked + label:after,
				.radio input[type='checkbox']:checked + label:before,
				.checkbox input[type='checkbox']:checked + label:before,
				.radio input[type='checkbox']:checked + label:after,
				.checkbox input[type='checkbox']:checked + label:after {
					opacity: 1;
				}

				// 左右推拉checkbox manage_list_item
				.checkboxRow {
					position: relative;
					height: 24px;
					width: 56px;
					display: inline-block;
				}
				.checkboxRow label {
					color: #b4b4b4;
					border: 1px solid #d8d8d8;
					background: #f2f2f2;
					padding-left: 10px;
					padding-right: 0;
					border-radius: 16px;
					line-height: 0.19rem;
					text-align: center;
					width: 0.44rem;
					font-size: 12px;
					position: absolute;
					display: block;
					top: 0;
					left: 0;
				}
				.checkboxRow label:nth-of-type(1) {
					color: #3464ca;
					border: 1px solid #3464ca;
					padding-right: 10px;
					padding-left: 0;
					background: #e4edff;
					opacity: 0;
					z-index: 1;
				}
				.checkboxRow label:nth-of-type(1):after,
				.checkboxRow label:nth-of-type(2):before {
					display: inline-block;
					content: '';
					width: 0.14rem;
					height: 0.14rem;
					background: #d8d8d8;
					border-radius: 100%;
					position: absolute;
					top: 2px;
				}
				.checkboxRow label:nth-of-type(1):after {
					right: 2px;
					background: #3464ca;
				}
				.checkboxRow label:nth-of-type(2):before {
					left: 2px;
				}
				.checkboxRow input[type='checkbox']:checked + label:nth-of-type(2) {
					opacity: 0;
				}
				.checkboxRow input[type='checkbox']:checked + label:nth-of-type(1) {
					opacity: 1;
				}

				/*select*/
				input[type='date'],
				select {
					//去除select右边默认的图标
					appearance: none;
					-moz-appearance: none;
					-webkit-appearance: none;
					-ms-appearance: none;
					background: transparent !important;
				}

				.select {
					background: #fff;
					border: 1px solid ${theme.bordercolor};
					border-radius: 0.16rem;
					min-width: 2rem;
					width: 84%;
					padding: 0 0.1rem 0 0.06rem;
					position: relative;
				}
				.select select {
					//去除select右边默认的图标
					appearance: none;
					-moz-appearance: none;
					-webkit-appearance: none;
					-ms-appearance: none;
					width: 100%;
					height: 0.34rem;
					line-height: 0.34rem;
					border: 0px solid #fff;
					background: transparent;
					color: ${theme.mainfontcolor};
				}
				.select .select-icon {
				}
				.select .select-icon i:nth-of-type(1) {
					 {
						/*@include sanjiao(left, bottom, right, #B8C2C7, 0.04rem);*/
					}
					width: 0;
					height: 0;
					border-left: 0.04rem solid transparent;
					border-right: 0.04rem solid transparent;
					border-bottom: 0.04rem solid #b8c2c7;
					display: block;
				}
				.select .select-icon i:nth-of-type(2) {
					 {
						/*@include sanjiao(left, top, right, #B8C2C7, 0.04rem);*/
					}
					width: 0;
					height: 0;
					border-left: 0.04rem solid transparent;
					border-right: 0.04rem solid transparent;
					border-top: 0.04rem solid #b8c2c7;
					display: block;
					margin-top: 0.04rem;
				}

				/* shade */
				.shade,
				.shadeWhite {
					position: fixed;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					background: rgba(0, 0, 0, 0.5);
				}
				.shadeWhite {
					background: rgba(255, 255, 255, 1);
				}

				 {
					/* theme end --- */
				}

				.textInput {
					flex: 3;
					border-bottom: 0px;
					line-height: 30px;
					height: 30px;
					border-radius: 5px;
					margin-right: 15px;
				}
				.blockPrimaryBtn {
					display: block !important;
					background-color: ${theme.maincolor};
					height: 40px;
					text-align: center;
					border-radius: 10px;
					font-size: 16px;
				}

				/**
       * list item
       */
				.listItem {
					padding: 0 15px;
					color: ${theme.mainfontcolor};
					line-height: 0.36rem;
					font-size: ${theme.nfontsize};
					box-sizing: content-box;
				}
				.listItem:nth-of-type(2n + 1) {
					background: #fbfbfb;
				}
				.listItem:hover {
					background: #f7f7f7;
				}

				.disabledDetailInput input,
				.disabledDetailInput,
				.disabledDetailInput textarea {
					border: none;
					min-height: 0.3rem;
				}
				/*子页面顶部设置*/
				.orderRecordsPage {
					float: left;
					width: 100%;
				}
				.regisListTop button.bigBtn {
					font-size: 13px;
					color: #ffffff;
					width: 103px;
					height: 40px;
					font-family: 'PingFangSC-Regular', 'PingFang SC';
					font-weight: 400;
					font-style: normal;
					float: left;
					line-height: 40px;
					text-align: center;
					background: inherit;
					background-color: rgba(0, 204, 102, 1);
					color: #ffffff;
					border-radius: 5px;
					cursor: pointer;
				}

				.childTopBar span {
					// font-size: 13px;
					// color: #ffffff;
					// width: 103px;
					// height: 40px;
					// font-family: 'PingFangSC-Regular', 'PingFang SC';
					// font-weight: 400;
					// font-style: normal;
					// float: left;
					// line-height: 40px;
					// text-align: center;
					// background: inherit;
					// color: #000000;
					// border-width: 1px;
					// border-style: solid;
					// border-color: rgba(204, 204, 204, 1);
					// border-radius: 5px;
					// cursor: pointer;
					// margin: 20px 0;
				}
				// .childTopBar span:nth-child(1) {
				//   margin-left: 20px;
				// }
				.healthFile_menu span.sel{
				  background: rgba(42,205,200,1);
				  color: #ffffff;
				  border: none;
				  -moz-box-shadow: none;
				  -webkit-box-shadow: none;
				  box-shadow: 1px 1px 4px 2px cadetblue;
    			border-radius: 4px;
				}
				
				.saveBtn {
					border-width: 0px;
					// position: absolute;
					left: 0px;
					top: 0px;
					width: 103px;
					height: 40px;
					background: inherit;
					background-color: rgba(0, 204, 102, 1);
					border: none;
					border-radius: 5px;
					-moz-box-shadow: none;
					-webkit-box-shadow: none;
					box-shadow: none;
					font-family: 'PingFangSC-Regular', 'PingFang SC';
					font-weight: 400;
					font-style: normal;
					color: #ffffff;
					display: table;
					margin: 10px auto;
					cursor: pointer;
				}
				.commonBtn {
					color: #ffffff;
					width: 103px;
					height: 40px;
					font-family: 'PingFangSC-Regular', 'PingFang SC';
					font-weight: 400;
					font-style: normal;
					float: left;
					line-height: 40px;
					text-align: center;
					background: inherit;
					color: #000000;
					border-width: 1px;
					border-style: solid;
					border-color: rgba(204, 204, 204, 1);
					border-radius: 5px;
					cursor: pointer;
				}
				.regisListTop {
					float: left;
					// margin: 10px 20px;
					width: 100%;
					margin-top: 10px;
				}
				.regisListTop input[type='text'] {
					width: 298px;
					height: 36px;
					font-family: 'ArialMT', 'Arial';
					font-weight: 400;
					font-style: normal;
					font-size: 13px;
					text-decoration: none;
					color: #000000;
					text-align: left;
					margin: 10px 0 0 20px;
				}
				.addBtn {
					width:150px;
					height:40px; 
					background:rgba(255,255,255,1);
					border-radius: 4px ; 
					font-size:14px;
					font-family:PingFangSC;
					color:rgba(42,205,200,1);
					border:1px solid #2ACDC8;
					cursor:pointer;
				}
				.addBtn:hover{
					background:rgba(42,205,200,1);
					color:rgba(255,255,255,1);
				}
				.regisListTop button {
					border-width: 0px;
					left: 0px;
					top: 0px;
					width: 103px;
					height: 30px;
					background: inherit;
					background-color: rgba(0, 204, 102, 1);
					border: none;
					border-radius: 5px;
					-moz-box-shadow: none;
					-webkit-box-shadow: none;
					box-shadow: none;
					font-family: 'PingFangSC-Regular', 'PingFang SC';
					font-weight: 400;
					font-style: normal;
					color: #ffffff;
					margin: 10px 0 0 30px;
					cursor: pointer;
				}
				.regisListTop a {
					font-family: 'PingFangSC-Regular', 'PingFang SC';
					font-weight: 400;
					font-style: normal;
					color: #cccccc;
					font-size: 14px;
					margin-left: 20px;
				}
				.formListBox,
				.regisList {
					float: left;
					width: 100%;
				}

				.regisList ul li {
					float: left;
					width: 300px;
					height: 216px;
					background: inherit;
					background-color: rgba(255, 255, 255, 1);
					box-sizing: border-box;
					// border-width: 1px;
					// border-style: solid;
					border-color: rgba(204, 204, 204, 1);
					border-radius: 7px;
					-moz-box-shadow: none;
					-webkit-box-shadow: none;
					box-shadow: none;
					margin: 20px 30px 0 0;
				}
				.regisList ul li div {
					float: left;
					width: 280px;
					font-size: 14px;
					margin: 0 10px;
					height: 22px;
					line-height: 22px;
				}
				.liTop span.updateTime {
					font-family: 'PingFangSC-Regular', 'PingFang SC';
					font-weight: 400;
					font-style: normal;
					color: #cccccc;
					float: left;
				}
				.liTop span.status {
					float: right;
				}
				.regisList ul li div.liTop {
					height: 35px;
					line-height: 35px;
				}
				.regisList ul li div.seeDetail {
					width: 100%;
					margin: 0;
					text-align: center;
					height: 40px;
					line-height: 40px;
					border-top: 1px solid #d8d8d8;
					cursor: pointer;
					margin-top: 7px;
				}
				.regisList ul li div.seeDetail a {
					width: 50%;
					text-align: center;
					display: block;
					float: left;
				}
				.regisList ul li div.seeDetail a:hover {
					font-weight: bold;
				}
				.mask {
					position: fixed;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0.5);
					top: 0;
					left: 0;
					z-index: 1000;
					overflow: auto;
					display: flex;
					align-items: center;
          justify-content: center;
				}

				.healthFile {
					width: 853px;
					min-height: 837px;
					background: rgba(255,255,255,1);
					box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2);
					position: absolute;
					top: 95px;
				}
				.doctorList {
					width: 950px;
					height: 683px;
					background: rgba(244, 247, 248, 1);
					box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
					position: absolute;
					left: 324px;
					top: 146px;
				}
				.doctorList_top {
					border-bottom: 1px solid #d8d8d8;
					width: 100%;
					height: 93px;
				}

				.healthFile_top {
					width: 100%;
					height: 50px;
					border-bottom: 1px solid #d8d8d8;
				}
				.healthFile_top span:nth-child(1) {
					float: left;
					height: 50px;
					line-height: 50px;
					text-indent: 10px;
				}
				.healthFile_top span:nth-child(2) {
					float: right;
					height: 20px;
					line-height: 30px;
					width: 30px;
					text-align: center;
					font-size: 20px;
					cursor: pointer;
				}
				.healthFile_menu {
					width: 720px;
					margin: 20px auto 20px auto;
					height: 31px;
				}
				.healthFile_menu span {
					float: left;
					width: 238px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					border: 1px solid #d8d8d8;
					cursor: pointer;
				}
				.progress {
					width: 720px;
					height: 15px;
					margin: 10px auto;
					border: 1px solid #d8d8d8;
					text-align: center;
					line-height: 15px;
				}
				.progressContent {
				}
				.mRecord,
				.recordContent {
					// width: 667px;
					width: 720px
					margin: 0 auto;
					height: auto;
				}
				.mRecord ul,
				.recordContent ul {
					float: left;
					width: 100%;
					margin-top: 20px;
				}
				.mRecord ul li {
					float: left;
					width: 100%;
					margin-bottom: 10px;
				}

				.recordContent ul li {
					float: left;
					width: 50%;
					height: 90px;
				}
				.mRecord ul li label,
				.recordContent ul li label {
					float: left;
					width: 100%;
				}
				.mRecord ul li textarea {
					// width: 661px;
					width: 100%;
					background: rgba(245,248,249,1);
					border-radius: 4px;
					border: 1px solid #d9d9d9;
					resize:none;
				}
				.mRecord ul li input,
				.recordContent ul li>input {
					width: 326px;
					height: 37px;
					background: rgba(245,248,249,1);
					border-radius: 4px;
					border: 1px solid #d9d9d9;
					padding: 0;
    			margin-top: 3px;
				}
				.recordContent ul li select {
					width: 300px;
					height: 30px;
				}
				.bottomBtn {
					width: 210px;
					margin: 8px auto;
					height: 40px;
					display:flex;
				}
				.bottomBtn button {
					float: left;
					margin: 0 10px;
				}

				.radioDiv {
					float: left;
					margin-left: 15px;
				}
				.radioDiv label {
					float: left;
					height: 60px;
					line-height: 60px;
				}
				.regisListTop input[type='text'].searchbox {
					width: 171px;
					height: 36px;
				}
				.regisListTop input[type='text'].datebox {
					width: 85px;
					height: 36px;
				}
				.calenderFilter {
					float: left;
					// margin: 10px 0;
					// width: 99%;
				}
				// .calenderFilterBtn {
				// 	width: 103px;
				// 	height: 30px;
				// 	background: inherit;
				// 	background-color: rgba(0, 204, 102, 1);
				// 	border: none;
				// 	border-radius: 5px;
				// 	-moz-box-shadow: none;
				// 	-webkit-box-shadow: none;
				// 	box-shadow: none;
				// 	font-family: 'PingFangSC-Regular', 'PingFang SC';
				// 	font-weight: 400;
				// 	font-style: normal;
				// 	color: #ffffff;
				// 	margin-left: 30px;
				// 	cursor: pointer;
				// }
				// .calenderBox h4 {
				// 	float: left;
				// 	width: 1000px;
				// 	text-align: center;
				// }
				// .calendarContent {
				// 	float: left;
				// 	width: 1000px;
				// }
				// .calendarContent table {
				// 	border: 1px solid;
				// 	border-collapse: collapse;
				// 	margin: 0 auto;
				// }
				// .calendarContent table tr {
				// 	border-bottom: 1px solid;
				// 	height: 30px;
				// }
				// .calendarContent table tr td {
				// 	border: 1px solid;
				// 	width: 100px;
				// 	text-align: center;
				// }
				.listBox {
					float: left;
					margin: 10px 20px;
					width: 900px;
				}
				.listBox ul {
					width: 100%;
					float: left;
					border-top: 1px solid #909090;
					border-left: 1px solid #909090;
				}
				.listBox ul li {
					float: left;
					border-bottom: 1px solid #909090;
					border-right: 1px solid #909090;
					text-align: center;
					font-size: 13px;
					height: 30px;
					line-height: 30px;
				}
				.cardNumBox {
					width: 562px;
					height: 81px;
					background-color: rgba(255, 255, 255, 1);
					box-sizing: border-box;
					border-width: 1px;
					border-style: solid;
					border-color: rgba(204, 204, 204, 1);
					border-radius: 0px;
					// float: left;
					margin: 20px;
				}
				.cardNumber {
					width: 50%;
					float: left;
				}
				.cardNumber span {
					float: left;
					width: 100%;
					height: 40px;
					line-height: 40px;
					text-indent: 20px;
				}
				.memberLevel {
					width: 30%;
					float: left;
				}
				.memberLevel span {
					float: left;
					width: 100%;
					height: 40px;
					line-height: 40px;
					text-indent: 20px;
				}
				.changeLevel {
					float: left;
				}
				.changeLevel button {
					float: left;
					// width: 80px;
					margin: 30px 0 0 0;
				}
				.discountSituation {
					flex-direction: column;
				}
				.cardInfo span,
				.discountSituation span {
					width: 93%;
 					height: 40px;
    			line-height: 40px;
    			text-indent: 20px;
    			margin: 0 auto;
    			font-size: 16px;
    			font-weight: bold;
    			border-bottom: 1px solid #d9d9d9;
				}
				.cardInfo ul,
				.discountSituation ul {
					width: 90%;
					margin:10px auto;
				}
				.cardInfo ul li,
				.discountSituation ul li {
					float: left;
					width: 50%;
					height: 30px;
				}
				.cardInfo {
					width: 562px;
					height: 176px;
					background-color: rgba(255, 255, 255, 1);
					box-sizing: border-box;
					border-width: 1px;
					border-style: solid;
					border-color: rgba(204, 204, 204, 1);
					border-radius: 0px;
					// float: left;
					margin: 20px;
				}
				.cardInfoBtn {
					width: 90%;
					margin:10px auto;
				}
				.cardInfoBtn button {
					float: left;
					margin: 0 20px 20px 0;
        }
				//子页面顶部菜单
				.childTopBar {
					float: left;
					width: 100%;
					// background:#909090;
				}
				.childTopBar span {
					margin-top: 31px;
					width: 126px;
					height: 37px;
					background: rgba(255, 255, 255, 1);
					float: left;
					text-align: center;
					line-height: 37px;
					cursor: pointer;
					margin-bottom: 10px;
				}
				.childTopBar span:nth-child(1) {
					margin-left: 66px;
				}
				.childTopBar span:hover,
				.childTopBar span.sel {
					background: rgba(42, 205, 200, 1);
					border-radius: 4px 0px 0px 4px;
					font-size: 14px;
					font-family: MicrosoftYaHei-Bold;
					color: rgba(255, 255, 255, 1);
				}
				.childTopBar span:nth-child(2):hover,
				.childTopBar span.sel {
					border-radius: 0;
				}
				.childTopBar span:nth-child(3):hover,
				.childTopBar span.sel {
					border-radius: 4px 4px 0px 0px;
				}
				//子页面数据列表
				.listContent ul {
					float: left;
					margin: 10px 0 0 0;
				}
				.listContent ul li {
					width: 360px;
					// height: 270px;
					background: rgba(255, 255, 255, 1);
					border-radius: 7px;
					margin: 10px 10px 0 0;
					float: left;
					display: flex;
					flex-direction: column;
				}
				.itemTop {
					border-bottom: 2px solid #f4f7f8;
					margin: 10px 14px 0 14px;
					height: 37px;
					// display: flex;
					// flex-direction: row;
					// align-items: center;
				}
				.itemTop span:nth-child(1) {
					width: auto;
					height: 19px;
					font-size: 16px;
					font-family: MicrosoftYaHei;
					color: rgba(51, 51, 51, 1);
					margin-left: 12px;
				}
				.itemTop span:nth-child(1):hover{
					text-decoration: underline;
    			color: rgba(42,205,200,1);
				}
				.itemTop span:nth-child(2) {
					font-size: 14px;
					font-family: MicrosoftYaHei;
					color: rgba(102, 102, 102, 1);
					margin: 2px 0 0 12px;
				}
				.itemTop span:nth-child(3) {
					font-size: 14px;
					font-family: MicrosoftYaHei;
					color: rgba(102, 102, 102, 1);
					margin: 2px 0 0 12px;
				}
				.itemTop span:nth-child(4) {
					width: 60px;
					height: 20px;
					border-radius: 10px;
					float: right;
					text-align: center;
					line-height: 20px;
				}
				.maskBoxBottom button{
					background: rgba(255,255,255,1);
					border-radius: 4px;
					border: 1px solid #d9d9d9;
					height: 32px;
					cursor: pointer;
					margin-left: 10px;
					font-size: 14px;
					font-family: MicrosoftYaHei;
					color: rgba(0,0,0,0.65);
					padding: 0 15px;
				}
				.maskBoxBottom button:hover {
					background: rgba(42,205,200,1);
					color: #FFFFFF;
				}
				.itemCenter {
					flex: 1;
					display: flex;
					flex-direction: column;
					width: 332px;
					margin: 0 auto 0 auto;
					justify-content: center;
				}
				.itemCenter span {
					display: flex;
					flex-direction: row;
					height: 35px;
					line-height: 26px;
					margin: 0px 0px 0 12px;
				}
				.itemCenter span a:nth-child(1) {
					width: 75px;
					color: #666666;
					font-size: 14px;
				}
				.itemCenter span a:nth-child(2) {
					color: #333333;
					font-size: 14px;
				}
				.itemBottom {
					width: 100%;
					height: 39px;
					border-top: 2px solid #42b7ba;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
				}
				.itemBottom span {
					flex: 1;
					font-size: 12px;
					font-family: MicrosoftYaHei;
					color: rgba(49, 176, 179, 1);
					height: 39px;
					line-height: 39px;
					text-align: center;
					cursor:pointer;
					border-right: 2px solid #31b0b3;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.itemBottom span:nth-child(1) {
					border-right: 2px solid #31b0b3;
				}
				.itemBottom span:nth-child(2) {
					// border-right: 2px solid #31b0b3;
				}
				.itemBottom span:last-child{
					border:none;
				}
				//顶部搜索栏
				.filterBox {
					float: left;
					width: 1098px;
					min-height: 60px;
					background: rgba(255, 255, 255, 1);
					box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
					border-radius: 4px;
					margin-left: 66px;
					display: flex;
				}
				.filterBox a{
					color: rgba(102,102,102,1);
				}
				.filterBox .boxLeft {
					float: left;
					flex: 9;
				}
				.filterBox .boxLeft .dateDiv{
					float: left;
					margin: -4px 10px;
				}
				.filterBox .boxLeft>input {
					float: left;
					width: 328px;
					height: 30px;
					background: rgba(255, 255, 255, 1);
					border-radius: 4px;
					border: 1px solid #d9d9d9;
					margin: 14px 30px;
					text-indent: 10px;
					padding: 0;
				}
				.filterBox .boxLeft>input[type='date']{
					height: 20px;
					padding: 5px 0;
					width: 120px;
					text-indent: 0;
					margin: 14px 0 0 30px;
				}
				.filterBox .boxLeft button {
					float: left;
					width: 60px;
					height: 28px;
					border-radius: 4px;
					border: 1px solid #2acdc8;
					color: rgba(42, 205, 200, 1);
					font-size: 12px;
					margin: 16px 0;
					background: none;
					cursor: pointer;
				}
				.filterBox .boxRight {
					float: right;
					flex: 1;
				}
				.filterBox .boxRight button {
					float: left;
					width: 100px;
					height: 28px;
					background: rgba(42, 205, 200, 1);
					border-radius: 4px;
					border: none;
					color: rgba(255, 255, 255, 1);
					font-size: 12px;
					cursor: pointer;
					margin: 16px 35px 0 0;
				}
				.boxRight button a{
					color: #ffffff;
				}
				.listContent {
					float: left;
					width: 1120px;
					margin-left: 66px;
					// background: #909090;
				}
				//就诊人详情--就诊信息
				.patientInfo div{
					height:60px;
					flex:3;
					line-height:60px;
					text-align:center;
				}
				.keyPhysicalData{
					flex-direction: column;
				}
				.keyPhysicalData span{
					font-size:16px;
					font-family:MicrosoftYaHei;
					color:rgba(102,102,102,1);
					margin: 20px 30px;
				}
				.keyPhysicalData ul{
					width:94%;
					margin:10px auto;
				}
				.keyPhysicalData ul li{
					float:left;
					width:25%;
					height: 80px;
				}
				.keyPhysicalData ul li div{
					line-height:35px;
				}
				.keyPhysicalData ul li .dataTitle{
					font-size:16px;
					font-family:MicrosoftYaHei-Bold;
					color:rgba(102,102,102,1);
					font-weight:bold;
				}
				.keyPhysicalData ul li .dataContent{
					font-size:16px;
					font-family:MicrosoftYaHei;
					color:rgba(102,102,102,1);
				}
				.keyPhysicalData .seeMore{
					font-size:12px;
					font-family:MicrosoftYaHei;
					color:rgba(42,205,200,1);
					text-align:center;
					margin:20px 0;
					cursor:pointer;
				}
				//费用表格
				.detailBox{
					display: flex;
					flex-direction: column;
					margin-top: 12px;
				}
				.blankBox{
					display: flex;
					width:1096px;
					// height:189px; 
					background: rgba(255, 255, 255, 1);
					border-radius: 4px ; 
					margin: 20px 0 0 65px;
					box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
				}
				.feeScheduleBox{
					display: flex;
					width:1096px;
					// height:189px; 
					background: rgba(255, 255, 255, 1);
					border-radius: 4px ; 
					margin: 20px 0 0 65px;
				}
				.feeScheduleBox ul{
					width:100%;
					display: flex;
					flex-direction: column;
					border:1px solid #E9E9E9;
					border-bottom:none;
				}
				.feeScheduleBox ul li{
					display: flex;
					min-height:40px;
					border-bottom:1px solid #E9E9E9;
					line-height:40px;
					text-align:center;
				}
				.feeScheduleBox ul li:nth-child(1){
					background:rgba(247,247,247,1);
				}
				.feeScheduleBox ul li div{
					flex:2;
					border-left:1px #E9E9E9 dashed;
				}
				.feeScheduleBox ul li div:nth-child(1){
					flex:1;
				}
				.toatalFeeBox{
					display:flex;
					flex-direction: column;
					width:1096px;
					background: rgba(255, 255, 255, 1);
					border-radius: 4px ; 
					margin: 20px 0 0 65px;
				}
				.toatalFeeBox h4{
					height:30px;
					text-align:center;
					border-bottom:1px solid #d8d8d8;
					line-height:30px;
					margin: 0;
				}
				.toatalFeeBox ul{
					width:100%;
					margin:10px 0;
				}
				.toatalFeeBox ul li{
					float:left;
					width:25%;
					text-align:center;
					height:30px;
					line-height:30px;
				}
				.feeScheduleBottom{
					margin: 20px 65px;
					width:1098px;
				}
				.feeScheduleBottom button{
					width:150px;
					height:40px; 
					background:rgba(255,255,255,1);
					border-radius: 4px ;
					color:rgba(42,205,200,1);
					font-size:14px;
					font-family:PingFangSC;
					border:1px solid #2ACDC8;
					float:right;
					margin-right:20px;
				}
				.feeScheduleBottom button:hover{
					width:150px;
					height:40px; 
					background:rgba(42,205,200,1);
					border-radius: 4px ; 
					border:none;
					color:rgba(255,255,255,1);
				}
				.detailBoxCenter,
				.detailBoxTop{
					display: flex;
					width:1096px;
					// height:189px; 
					background: rgba(255, 255, 255, 1);
					border-radius: 4px ; 
					margin: 20px 0 0 65px;
				}
				.detailBoxTop .topLeft{
					flex: 1;
					// background: #ababab; 
					height: 80px;
					margin: 10px 0;
					text-align: center;
					color:rgba(100,100,100,1);
					border-right:1px solid #d8d8d8;
				}
				.detailBoxTop .topLeft div{
					font-size:18px;
					line-height:40px;
					font-family:MicrosoftYaHei;
				}
				.detailBoxTop .topLeft b{
					font-size:30px;
					font-family:MicrosoftYaHei-Bold;
				}
				.detailBoxTop .topLeft a{
					font-size:16px;
					font-family:MicrosoftYaHei-Bold;
				}
				.detailBoxTop .topRight{
					flex: 5;
					// background: #eaeaea;
					height: 80px;
					margin: 10px 20px;
				}
				.detailBoxTop .topRight div{
					float:left;
					width:25%;
					text-align:left;
					color:rgba(102,102,102,1);
					line-height:40px;
					font-size:14px;
				}
				.detailBoxCenter{
					flex-direction: column;
				}
				.detailBoxCenter ul{
					margin: 56px auto 10px auto;
					width:70%;
				}
				.detailBoxCenter ul li{
					float:left;
					// margin-left:20px;
					width:50%;
					height:40px;
					display:flex;
					line-height: 40px;
				}
				.detailBoxCenter ul li label{
					flex:1;
				}
				.detailBoxCenter ul li div{
					flex:2;
				}
				.detailBoxCenter ul li input[type="text"]{
					width:160px;
					height:28px; 
					background:rgba(255,255,255,1);
					border-radius: 4px; 
					border: 1px solid #d8d8d8;
				}
				.checkoutPay{
					margin: 10px auto;
					width:70%;
				}
				.checkoutPay span{
					font-size:18px;
					font-family:MicrosoftYaHei-Bold;
					color:rgba(102,102,102,1);
					font-weight:bold;
				}
				.checkoutPay .payType{
					margin: 30px 0;
				}
				.checkoutPay .payType button{
					width:100px;
					height:34px; 
					border-radius: 4px ; 
					border:1px solid #d9d9d9;
					background: transparent;
					cursor: pointer;
					margin-right: 20px;
					font-size:14px;
					font-family:PingFangSC-Regular;
					color:rgba(102,102,102,1);
				}
				.checkoutPay .payType button.sel,
				.checkoutPay .payType button:hover{
					background:rgba(16,142,233,1);
					color:rgba(255,255,255,1);
				}
				.checkoutPay .receipt{
					display: flex;
				}
				.checkoutPay .receipt div{
					flex:1;
				}
				.checkoutPay .receipt div label{
					font-size:16px;
					font-family:MicrosoftYaHei-Bold;
					color:rgba(102,102,102,1);
					font-weight:bold;
				}
				.checkoutPay .receipt div input{
					width:220px;
					height:28px; 
					background:rgba(255,255,255,1);
					border-radius: 4px ; 
					border:1px solid #d9d9d9;
					margin-left:26px;
				}
				.checkoutPay .bottomBtn{
					margin: 71px auto;
					width: 333px;
					height: 40px;
				}
				.checkoutPay .bottomBtn button{
					width:150px;
					height:40px; 
					background:rgba(255,255,255,1);
					border-radius: 4px ;
					font-size:14px;
					font-family:PingFangSC;
					color:rgba(42,205,200,1);
					border:1px solid #2ACDC8;
					margin:0;
				}
				.checkoutPay .bottomBtn button.sel,
				.checkoutPay .bottomBtn button:hover{
					background:rgba(42,205,200,1);
					color:rgba(255,255,255,1);
				}
				//选择医生弹出框
				.doctorList_top>span:nth-child(1) {
					font-size: 14px;
					font-family: MicrosoftYaHei;
					color: rgba(102, 102, 102, 1);
					line-height: 17px;
					height: 17px;
					text-indent: 0;
					margin: 40px 0 0 60px;
					float: left;
				}
				.doctorList_top select {
					width: 140px;
					height: 30px;
					background: rgba(245, 248, 249, 1) !important;
					border-radius: 4px;
					float: left;
					margin: 34px 0 0 30px;
					border: 1px solid #d9d9d9;
					text-indent: 10px;
				}
				.doctorList_top .topFilter>input {
					width: 152px;
					height: 36px;
					background: rgba(255, 255, 255, 1);
					border-radius: 4px;
					float: left;
					margin: 30px 0 0 15px;
					border: 1px solid #d9d9d9;
					padding: 0;
					text-indent: 10px;
				}
				.doctorList_top button {
					width: 60px;
					height: 28px;
					border-radius: 4px;
					border: 1px solid #2acdc8;
					float: left;
					margin: 36px 0 0 30px;
					color: rgba(42, 205, 200, 1);
					cursor: pointer;
					background: transparent;
				}
				.healthFile_top span:nth-child(2),
				.doctorList_top span:last-child {
					width: 40px;
					height: 40px;
					background: rgba(255, 95, 87, 1);
					float: right;
					color: #ffffff;
					font-size: 20px;
					text-align: center;
					text-indent: 10px;
					line-height: 35px;
					border-bottom-left-radius: 100%;
					cursor: pointer;
				}
				.doctorList_content ul {
					margin: 0 20px;
					display: block;
					width: auto;
					height: 400px;
					// background: #909090;
				}
				.doctorList_content ul li {
					width: 250px;
					height: 150px;
					background: rgba(255, 255, 255, 1);
					box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
					float: left;
					margin-left: 40px;
					margin-top: 26px;
					display: flex;
				}
				.doctorList_content ul li img {
					width: 40px;
					height: 40px;
					margin: 5px auto;
					display: table;
				}
				.doctorList_content ul li > div:nth-child(1) {
					float: left;
					width: 100px;
					margin: 25px 0;
					flex: 2;
				}
				.doctorList_content ul li > div:nth-child(1) > span {
					width: 100%;
					text-align: center;
					height: 20px;
					display: block;
					line-height: 25px;
				}
				.doctorList_content ul li > div:nth-child(2) {
					float: left;
					width: 100px;
					margin: 25px 0;
					flex: 3;
				}
				.doctorList_content ul li > div:nth-child(2) > span {
					float: left;
					width: 100%;
					font-size: 12px;
					height: 33px;
					line-height: 33px;
				}
				//搜索层
				.researchView{
					position: absolute;
					background: #ffffff;
					width: 488px;
					z-index: 100;
					top: 75px;
					cursor: default;
					border: 1px solid #d8d8d8;
					max-height: 500px;
					overflow: auto;
					box-shadow: 0px 2px 5px #a0a0a0;
				}
				.researchView>span{
					height: 40px;
					width: 100%;
					display: inline-block;
					line-height: 40px;
					text-indent: 20px;
					border-bottom: 1px solid #d8d8d8;
				}
				.formList .researchView>ul{
					display: flex;
					flex-direction: column;
					width: 100% !important;
				}
				.formList .researchView>ul>li{
					width: 100%;
					margin: 10px 0;
					flex-direction: row;
				}
				.formList .researchView>ul>li:hover{
					background: #eaeaea;
				}
				.formList .researchView>ul>li img{
					width: 40px;
					border-radius: 100%;
					height: 40px;
					flex: 1;
					margin-left: 10px;
				}
				.formList .researchView>ul>li .leftInfo{
					flex: 11;
					text-indent: 20px;
					line-height: 20px;
				}
				.formList .researchView>ul>li>div{
					
				}
				//日历列表
				.calendarCotent{
					width:1098px;
					min-height:637px; 
					background:rgba(255,255,255,1);
					box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.2);
					border-radius: 4px ;
					margin-top:20px;
				}
				.calenderFilter{
					width:1098px;
					height:42px; 
					background:rgba(255,255,255,1);
					box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.2);
					border-radius: 4px 4px 0px 0px ;
					position: relative; 
				}
				.filterCnter{
					width: 50%;
					margin: 0 auto;
					display: flex;
				}
				.filterCnter span{
					text-align:center;
					line-height:42px;
					height:42px;
					cursor:pointer;
					font-size:14px;
					font-family:MicrosoftYaHei;
					color:rgba(102,102,102,1);
				}
				.calenderFilterBtn{
					position: absolute;
					right: 10px;
					top: 7px;
					width:100px;
					height:28px; 
					background:rgba(42,205,200,1);
					border-radius: 4px ;
					border:none;
					color:rgba(255,255,255,1);
				}
				.calenderBox{}
				.calenderBox table{
					border-collapse: collapse;
				}
				.calenderBox table tr{
					border-bottom:1px solid #d8d8d8;
				}
				.calenderBox table tr td{
					width:137px;
					height:42px; 
					text-align:center;
					border:1px solid #d8d8d8;
				}
				.calenderBox table thead tr td{
					background:rgba(240,240,240,1);
				}

				//新增登记
				.saveBtn {
					width: 100px;
					height: 28px;
					background: rgba(42, 205, 200, 1);
					border-radius: 4px;
				}
				.formList {
					width: 1098px;
					align-items: center;
					margin: 31px 66px 33px 32px;
					background: rgba(255, 255, 255, 1);
					box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
					border-radius: 4px;
					display: block;
					float: left;
				}
				.titleLabel {
					height: 19px;
					float: left;
					font-size: 16px;
					font-family: MicrosoftYaHei;
					color: rgba(102, 102, 102, 1);
					line-height: 19px;
				}
				.line {
					height: 1px;
					width: 1000px;
					background: rgba(238, 238, 238, 1);
					margin: 21px 0 0 0;
				}
				.formList ul {
					width: 1000px;
					height: auto;
					margin: 0 auto;
				}
				.formList ul li {
					float: left;
					margin-top: 30px;
					display: flex;
					flex-direction: column;
					position: relative;
					width: 49%;
					// background: #909090;
					margin-left: 1%;
				}
				.formList ul li > label {
					height: 14px;
					font-size: 14px;
					font-family: MicrosoftYaHei;
					color: rgba(102, 102, 102, 1);
					line-height: 14px;
				}
				.formList ul li > input {
					// flex: 1;
					height: 40px;
					margin-top: 17px;
					background: rgba(245, 248, 249, 1);
					border-radius: 4px;
					border: 1px solid #d9d9d9;
				}
				.formList ul li > input[type='date']{
					height: 20px;
					padding:10px 0;
				}
				.formList ul li > select {
					margin-top: 17px;
					line-height: 40px;
					height: 40px;
					background: rgba(255, 255, 255, 1);
					border-radius: 4px;
					border: 1px solid #d9d9d9;
					margin-right: 8px;
				}
				.liDiv {
					display: flex;
					flex-direction: row;
					align-items: center;
					height: 40px;
					with: 100%;
					margin-top: 17px;
				}
				.liDiv input[type='text'] {
					flex: 1;
					// height: 40px;
					height: 100%;
					background: rgba(245, 248, 249, 1);
					border-radius: 4px;
					border: 1px solid #d9d9d9;
				}
				.liDiv input[type='radio'] {
					width: 14px;
					height: 14px;
					background: rgba(255, 255, 255, 1);
					box-sizing: inherit;
					border: 1px solid #108ee9;
				}
				.liDiv label {
					height: 18px;
					font-size: 10px;
					font-family: MicrosoftYaHei;
					color: rgba(102, 102, 102, 1);
					line-height: 18px;
				}
				.subButton {
					width: 100px;
					height: 28px;
					background: rgba(42, 205, 200, 1);
					border-radius: 4px;
					color: #ffffff;
					border: 0;
				}
			`}
    </style>
  )
}

export default styles
