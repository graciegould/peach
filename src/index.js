import './css/main.css'
import page from 'page';
console.log('Hello World');
const loadPage = async (pageName) => {
    const pageModule = await import(`./${pageName}`);
    console.log(pageModule);
    return pageModule.default;
};

const pages = {
    home: {
        entry: 'pages/home/home',
        url: '/',
    }
};

Object.keys(pages).forEach(pageName => {
    page(pages[pageName].url, async () => {
         await loadPage(pages[pageName].entry);
    });
});

page();
if (module.hot) {
    module.hot.accept();
}
