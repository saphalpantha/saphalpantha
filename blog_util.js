import * as fs from 'fs'
import path from 'path'
export const getData = () => {
    const filePath = path.join(process.cwd(), 'blog-data.json');
    const blogData = fs.readFileSync(filePath);
    const data = JSON.parse(blogData);
    return data;   
}

export  const getDataById = (slug) => {
    const allData = getData();
    const detailData = allData.filter(item => item.title == slug);
    // console.log('this is from blog_util', detailData)
    return detailData;
}

// export default getData