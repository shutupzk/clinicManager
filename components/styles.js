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
          background-color: #f2f2f2;
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
        .childTopBar {
          // width: 100%;
          // height: 80px;
          // float: left;
          // background: #909090;
          // padding: 15px 20px;
          // border-bottom: 1px solid #d8d8d8;
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
        // .healthFile_menu span.sel,
        // .childTopBar span:hover,
        // .childTopBar span.sel {
        //   background-color: rgba(0, 204, 102, 1);
        //   color: #ffffff;
        //   border: none;
        //   -moz-box-shadow: none;
        //   -webkit-box-shadow: none;
        //   box-shadow: none;
        // }
        .formList {
          float: left;
          width: 100%;
        }
        .formList ul {
          width: 1000px;
          height: auto;
          margin: 0 20px;
        }
        .formList ul li {
          float: left;
          margin-top: 30px;
          width: 50%;
          height: 65px;
        }
        .formList ul li > label {
          width: 70px;
          height: 18px;
          font-size: 10px;
          font-family: PingFangSC-Regular;
          color: rgba(102, 102, 102, 1);
          line-height: 18px;
        }
        .formList ul li > input {
          width: 400px;
          height: 30px;
          padding: 0px;
          background: rgba(245, 248, 249, 1);
          border-radius: 4px;
          border: 1px solid #d9d9d9;
        }
        .formList ul li > select {
          width: 100px;
          height: 30px;
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          float: left;
          border: 1px solid #d9d9d9;
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
          margin: 10px;
          cursor: pointer;
          float: right;
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
          background: rgba(255, 255, 255, 0.5);
          top: 0;
          z-index: 1000;
        }

        .healthFile {
          width: 853px;
          min-height: 785px;
          background: inherit;
          background-color: rgba(255, 255, 255, 1);
          box-sizing: border-box;
          border-width: 1px;
          border-style: solid;
          border-color: rgba(204, 204, 204, 1);
          border-radius: 0px;
          -moz-box-shadow: none;
          -webkit-box-shadow: none;
          box-shadow: none;
          position: absolute;
        }
        .doctorList {
          width: 853px;
          min-height: 617px;
          background: inherit;
          background-color: rgba(255, 255, 255, 1);
          box-sizing: border-box;
          border-width: 1px;
          border-style: solid;
          border-color: rgba(204, 204, 204, 1);
          border-radius: 0px;
          -moz-box-shadow: none;
          -webkit-box-shadow: none;
          box-shadow: none;
          position: absolute;
        }
        .doctorList_top {
          border-bottom: 1px solid #d8d8d8;
          width: 100%;
          height: 50px;
        }

        .healthFile_top {
          width: 100%;
          height: 30px;
          // background: #909090;
        }
        .doctorList_top span:nth-child(1),
        .healthFile_top span:nth-child(1) {
          float: left;
          height: 30px;
          line-height: 30px;
          text-indent: 10px;
        }
        .doctorList_top span:nth-child(1) {
          height: 60px;
          line-height: 60px;
        }
        .doctorList_top span:last-child,
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
          width: 667px;
          margin: 20px auto 10px auto;
          height: 60px;
        }
        .healthFile_menu span {
          float: left;
          width: 220px;
          height: 59px;
          text-align: center;
          line-height: 59px;
          border: 1px solid #d8d8d8;
        }
        .progress {
          width: 667px;
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
          width: 667px;
          margin: 0 auto;
          height: 550px;
        }
        .mRecord ul,
        .recordContent ul {
          float: left;
          width: 100%;
        }
        .mRecord ul li {
          float: left;
          width: 100%;
          margin-bottom: 10px;
        }

        .recordContent ul li {
          float: left;
          width: 50%;
          height: 75px;
        }
        .mRecord ul li label,
        .recordContent ul li label {
          float: left;
          width: 100%;
        }
        .mRecord ul li textarea {
          width: 661px;
        }
        .mRecord ul li input,
        .recordContent ul li input {
          width: 300px;
          height: 30px;
        }
        .recordContent ul li select {
          width: 300px;
          height: 30px;
        }
        .bottomBtn {
          width: 210px;
          margin: 8px auto;
          height: 40px;
        }
        .bottomBtn button {
          float: left;
          margin: 10px 0;
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
          margin: 10px 0;
          width: 99%;
        }
        .calenderFilterBtn {
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
          margin-left: 30px;
          cursor: pointer;
        }
        .calenderBox h4 {
          float: left;
          width: 1000px;
          text-align: center;
        }
        .calendarContent {
          float: left;
          width: 1000px;
        }
        .calendarContent table {
          border: 1px solid;
          border-collapse: collapse;
          margin: 0 auto;
        }
        .calendarContent table tr {
          border-bottom: 1px solid;
          height: 30px;
        }
        .calendarContent table tr td {
          border: 1px solid;
          width: 100px;
          text-align: center;
        }
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
          width: 80px;
          margin: 40px 0 0 0;
        }
        .discountSituation {
          width: 562px;
          height: 125px;
          background-color: rgba(255, 255, 255, 1);
          box-sizing: border-box;
          border-width: 1px;
          border-style: solid;
          border-color: rgba(204, 204, 204, 1);
          border-radius: 0px;
          // float: left;
          margin: 20px;
        }
        .cardInfo span,
        .discountSituation span {
          float: left;
          width: 100%;
          height: 35px;
          line-height: 35px;
          text-indent: 20px;
        }
        .cardInfo ul,
        .discountSituation ul {
          float: left;
          width: 100%;
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
          float: left;
          width: 100%;
        }
        .cardInfoBtn button {
          float: left;
          margin-left: 20px;
        }
      `}
    </style>
  )
}

export default styles
