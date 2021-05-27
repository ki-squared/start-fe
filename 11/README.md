# Todo List 

- 환경설정
    - Prettier

        ```
        yarn add prettier
        npx prettier test.js
        npx prettier --write test.js
        ```

        .prettierrc

        ```
        {
            "singleQuote": true,
            "tabWidth": 2,
            "useTabs": false,
            "semi": true,
            "trailingComma": "all",
            "printWidth": 80
        }
        ```

    - ESLint

        ```
        yarn add eslint --dev
        npx eslint --init
        ```

    - package.json

        ```
        npm init
        npm install
        ```

    - Webpack

        : [https://www.npmjs.com/package//webpack-dev-server](https://www.npmjs.com/package//webpack-dev-server)

        : npm install webpack-dev-server -g

        : npm i webpack-dev-server

        진짜 TODO-APP 만들면서 화났던 에러!!!! - version 5를 version 4로 낮춰야!

        : [https://likejirak.tistory.com/319](https://likejirak.tistory.com/319)

        ```
        npm uninstall html-webpack-plugin webpack webpack-cli
        npm i -D html-webpack-plugin@4.4.0 webpack@4.40.2 webpack-cli@3.3.9
        ```

        : Webpack CSS Loader

        ```
        npm install --save-dev css-loader style-loader
        ```

        ```
        /*webpack.config.js*/
        module: {
            rules: [
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            ],
          },
        ```
