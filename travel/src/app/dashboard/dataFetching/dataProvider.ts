// import jsonServerProvider from "ra-data-json-server";

// export const dataProvider = jsonServerProvider(
//   process.env.VITE_JSON_SERVER_URL,
// );


import { DataProvider } from 'react-admin';
// import fakeServerFactory from '../fakeServer';

export default (type: string) => {
    // The fake servers require to generate data, which can take some time.
    // Here we start the server initialization but we don't wait for it to finish
    let dataProviderPromise = getDataProvider(type);

    // Instead we return this proxy which may be called immediately by react-admin if the
    // user is already signed-in. In this case, we simply wait for the dataProvider promise
    // to complete before requesting it the data.
    // If the user isn't signed in, we already started the server initialization while they see
    // the login page. By the time they come back to the admin as a signed-in user,
    // the fake server will be initialized.
    const dataProviderWithGeneratedData = new Proxy(defaultDataProvider, {
        get(_, name) {
          console.log("name Proxyyy: ", name)
            if (name === 'supportAbortSignal') {
                return process.env.MODE === 'production';
            }
            return (resource: string, params: any) => {
              // console.log("resource: ", resource)
              // console.log("params: ", params)
                return dataProviderPromise.then(dataProvider => {
                  console.log("FUncsiya Isleyir: ", dataProvider[name.toString()](resource, params))
                    return dataProvider[name.toString()](resource, params);
                });
            };
        },
    });

    return dataProviderWithGeneratedData;
};

const getDataProvider = async (type: string): Promise<DataProvider> => {
    // await fakeServerFactory(process.env.REACT_APP_DATA_PROVIDER || '');
    /**
     * This demo can work with either a fake REST server, or a fake GraphQL server.
     *
     * To avoid bundling both libraries, the dataProvider and fake server factories
     * use the import() function, so they are asynchronous.
     */
    // if (type === 'graphql') {
    //     return import('./graphql').then(factory => factory.default());
    // }
    console.log("type: ", type)
    return import('./rest').then(provider =>  provider.default);
};

const defaultDataProvider: DataProvider = {
    // @ts-ignore
    create: () => Promise.resolve({ data: { id: 0 } }),
    // @ts-ignore
    delete: () => Promise.resolve({ data: {} }),
    deleteMany: () => Promise.resolve({}),
    getList: () => Promise.resolve({ data: [], total: 0 }),
    getMany: () => Promise.resolve({ data: [] }),
    getManyReference: () => Promise.resolve({ data: [], total: 0 }),
    // @ts-ignore
    getOne: () => Promise.resolve({ data: {} }),
    // @ts-ignore
    update: () => Promise.resolve({ data: {} }),
    updateMany: () => Promise.resolve({}),
};

