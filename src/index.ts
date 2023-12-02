import { injectGlobal } from '@emotion/css';

injectGlobal`


#dark {
	
  background-color: black;
  color: gray;

     .linkPage {
      font-size: 24px;
      background-color: gray;
      padding: 0px 5px 2px;
    }

    a {
      color: darkblue;
    }

    a:hover {
      color: darkred;
    }

    a:active {
      color: blue;
    }

  header {
    background-color: black;
	color: gray;
    button {
      background-color: #46045e;
      color: gray;
    }
   }
  
}

body {

  width: 100%;
  overflow-y: auto;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
	font-weight: normal;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

 }

* {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
 }
`;