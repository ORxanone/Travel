import { fetchUtils } from "react-admin";

const apiUrl = "https://dummyjson.com";

const customDataProvider = {
  getList: async (resource: any, params: any) => {
    const url = `${apiUrl}/${resource}`;
    const response = await fetchUtils.fetchJson(url);
    const { products, total } = response.json;
    return {
      data: products.map((item: { id: any }) => ({ ...item, id: item.id })),
      total: total,
    };
  },

  getOne: async (resource: any, params: { id: any }) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const response = await fetchUtils.fetchJson(url);
    return { data: response.json };
  },

  getMany: async (resource: any, params: { ids: any[] }) => {
    const ids = params.ids.join(",");
    const url = `${apiUrl}/${resource}?ids=${ids}`;
    const response = await fetchUtils.fetchJson(url);
    return {
      data: response.json.map((item: { id: any }) => ({
        ...item,
        id: item.id,
      })),
    };
  },

  getManyReference: async (resource: any, params: { target: any; id: any }) => {
    const url = `${apiUrl}/${resource}/${params.target}/${params.id}`;
    console.log(url)
    const response = await fetchUtils.fetchJson(url);
    const { comments, total } = response.json;
    return {
      data: comments.map((item: { id: any }) => ({ ...item, id: item.id })),
      total: total,
    };
  },

  create: async (resource: any, params: { data: any }) => {
    const url = `${apiUrl}/${resource}`;
    const options = {
      method: "POST",
      body: JSON.stringify(params.data),
    };
    const response = await fetchUtils.fetchJson(url, options);
    return { data: { ...params.data, id: response.json.id } };
  },

  update: async (resource: any, params: { id: any; data: any }) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const options = {
      method: "PUT",
      body: JSON.stringify(params.data),
    };
    const response = await fetchUtils.fetchJson(url, options);
    return { data: response.json };
  },

  updateMany: async (resource: any, params: { ids: any[]; data: any }) => {
    const updates = params.ids.map((id: any) =>
      fetchUtils.fetchJson(`${apiUrl}/${resource}/${id}`, {
        method: "PUT",
        body: JSON.stringify(params.data),
      }),
    );
    const responses = await Promise.all(updates);
    return { data: responses.map((response) => response.json.id) };
  },

  delete: async (resource: any, params: { id: any }) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const options = {
      method: "DELETE",
    };
    await fetchUtils.fetchJson(url, options);
    return { data: { id: params.id } };
  },

  deleteMany: async (resource: any, params: { ids: any[] }) => {
    const deletions = params.ids.map((id: any) =>
      fetchUtils.fetchJson(`${apiUrl}/${resource}/${id}`, {
        method: "DELETE",
      }),
    );
    await Promise.all(deletions);
    return { data: params.ids };
  },
};

export default customDataProvider;
