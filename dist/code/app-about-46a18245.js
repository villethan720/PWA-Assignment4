import{i as c,s as h,x as i,a as u,e as d}from"./index-1bfa0694.js";const m=c`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-left: 25px;
  }
`;var l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,b=(n,a,r,s)=>{for(var e=s>1?void 0:s?f(a,r):a,t=n.length-1,o;t>=0;t--)(o=n[t])&&(e=(s?o(a,r,e):o(e))||e);return s&&e&&l(a,r,e),e};let p=class extends h{constructor(){super()}render(){return i`
      <app-header ?enableBack="${!0}"></app-header>

      <main>
        <h2>About Page</h2>

        <sl-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games,
            apps that use machine learning and more!
          </p>

          <p>Check out <a
              href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these
              docs</a> to learn more about the advanced features that you can use in your PWA</p>
        </sl-card>
  </main>
    `}};p.styles=[u,m];p=b([d("app-about")],p);export{p as AppAbout};
//# sourceMappingURL=app-about-46a18245.js.map
