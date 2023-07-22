export default async function (ctx) {
  let params = ctx.request.query;
  let headers = ctx.headers;
  if ("role" in headers && headers["role"] === "admin") {
    if (
      "name" in params &&
      params.name !== null &&
      params.name !== "" &&
      "email" in params &&
      params.email !== null &&
      params.email !== ""
    ) {
      ctx.status = 200;
      ctx.body = {
        code: ctx.status,
        data: {
          ...params,
        },
        msg: "上传成功",
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        code: ctx.status,
        msg: "name 与 email 不得为空",
      };
    }
  } else {
    ctx.status = 401;
    ctx.body = {
      code: ctx.status,
      msg: "unauthorized post",
    };
  }
}