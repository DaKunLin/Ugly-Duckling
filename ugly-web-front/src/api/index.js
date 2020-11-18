import service from './service';

// 登录
const _login = (params) => service({
    url: 'api/vop_api/login/',
    method: 'POST',
    data: params
});

// 类别下拉框
const classSelect = ({
    cat_id = ""
} = {}) => service({
    url: '/api/vop_api/query/cat/son/',
    method: 'GET',
    params: { cat_id }
});

// 京东列表查询
const jdList = (params) => service({
    url: '/api/vop_api/query/vop/product/',
    method: 'GET',
    params: params
});

// 京东商品池，批量上架
const grounding = (params) => service({
    url: '/api/vop_api/product/pie/add/',
    method: 'POST',
    data: params
});
// 京东商品池，查看详情
const checkdetail = (params) => service({
    url: '/api/vop_api/query/product/detail/',
    method: 'GET',
    params: params
});

// 管理商品，初始列表

const initMan = (params) => service({
    url: '/api/vop_api/query/pie/product/',
    method: 'GET',
    params: params
});

// 管理商品，初始分类下拉框
const classSelectMan = ({
    cat_id = ""
} = {}) => service({
    url: '/api/vop_api/query/pie/category/',
    method: 'GET',
    params: { cat_id }
});

// 管理商品，批量上下架
const upDownList = (params) => service({
    url: '/api/vop_api/product/pie/shelf/',
    method: 'POST',
    data: params
});
// 管理商品，查看详情
const checkdetailMan = (params) => service({
    url: '/api/vop_api/product/pie/detail/',
    method: 'GET',
    params: params
});

// 对公账户管理之查询账户余额
const checkBalance = (params) => service({
    url: '/api/vop_api/account/info/',
    method: 'GET',
    params: params
});
// 对公账户管理之查询账户金额变动
const checkChangeList = (params) => service({
    url: '/api/vop_api/account/detail/',
    method: 'GET',
    params: params
});

// 京东定单管理列表查询
const orderList = (params) => service({
    url: '/api/vop_api/order/list/',
    method: 'POST',
    data: params
});



const accsseImg_URL = process.env.NODE_ENV == 'production' ? 'https://pie.seedland.cc/' : 'https://pietest.seedland.cc/';

export {
    accsseImg_URL,
    _login,
    classSelect,
    jdList,
    grounding,
    checkdetail,
    initMan,
    classSelectMan,
    upDownList,
    checkdetailMan,
    checkBalance,
    checkChangeList,
    orderList
}