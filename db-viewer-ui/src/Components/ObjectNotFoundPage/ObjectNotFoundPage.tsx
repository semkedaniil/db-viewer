import React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import { CommonLayout } from "../Layouts/CommonLayout";

import styles from "./ObjectNotFoundPage.less";

const clouds = [
    <path
        id="cloud1"
        key="cloud1"
        d="M53.0284 11.3455L52.2423 10.3247C48.1629 5.03344 41.9248 2 35.1332 2C26.291 2 18.2074 7.52195 15.0242 15.7413L14.5642 16.9274L13.3639 17.3761C6.56681 19.9173 2 26.4491 2 33.6295C2 43.2075 9.86547 51 19.5342 51H53.0284C64.0405 51 73 42.114 73 31.1937C73 20.8019 64.7955 12.1211 54.3222 11.4309L53.0284 11.3455Z"
    />,
    <path
        id="cloud2"
        key="cloud2"
        d="M88.964 18.0209L87.6241 16.2709C80.672 7.20018 70.0408 2 58.4665 2C43.3973 2 29.6211 11.4662 24.1962 25.5565L23.4123 27.5899L21.3666 28.359C9.78288 32.7153 2 43.9128 2 56.222C2 72.6415 15.4045 86 31.8822 86H88.964C107.731 86 123 70.7669 123 52.0463C123 34.2318 109.018 19.3505 91.1689 18.1673L88.964 18.0209Z"
    />,
    <path
        id="cloud3"
        key="cloud3"
        d="M152.929 29.8459L150.604 26.8042C138.538 11.0384 120.087 2 99.9996 2C73.8465 2 49.9374 18.4531 40.5223 42.9434L39.1618 46.4776L35.6115 47.8144C15.5075 55.3861 2 74.8485 2 96.243C2 124.782 25.2641 148 53.8618 148H152.929C185.5 148 212 121.523 212 88.9852C212 58.0219 187.733 32.1569 156.756 30.1002L152.929 29.8459Z"
    />,
    <path
        id="cloud4"
        key="cloud4"
        d="M103.338 20.6911L101.777 18.6494C93.6757 8.06687 81.2872 2 67.7998 2C50.2398 2 34.1866 13.0439 27.865 29.4826L26.9515 31.8548L24.5677 32.7521C11.0693 37.8345 2 50.8983 2 65.259C2 84.415 17.6202 100 36.8215 100H103.338C125.207 100 143 82.2281 143 60.3873C143 39.6037 126.707 22.2423 105.908 20.8618L103.338 20.6911Z"
    />,
    <path
        id="cloud5"
        key="cloud5"
        d="M206.518 39.0587L206.931 39.5969L207.608 39.6417L212.875 39.9902L212.875 39.9902C254.726 42.7561 287.5 77.5416 287.5 119.158C287.5 162.894 251.71 198.5 207.707 198.5H71.3717C32.8349 198.5 1.5 167.356 1.5 129.1C1.5 100.425 19.6945 74.3191 46.7824 64.164L51.6682 62.3328L52.2981 62.0967L52.5407 61.4693L54.4131 56.6279L54.4133 56.6273C67.1466 23.6582 99.4934 1.5 134.866 1.5C162.053 1.5 187.002 13.6714 203.318 34.892C203.318 34.8922 203.318 34.8924 203.318 34.8926L206.518 39.0587Z"
    />,
];

const cloudsFar = (
    <svg
        id="clouds-far"
        width="2770"
        height="667"
        viewBox="0 0 2770 567"
        fill="#ffffff"
        stroke="#e1e1e1"
        strokeWidth="2">
        <svg x="229" y="3" viewBox="0 0 75 53" width="75" height="53">
            {clouds[0]}
        </svg>
        <svg x="1398" y="0" viewBox="0 0 75 53" width="75" height="53">
            {clouds[0]}
        </svg>
        <svg x="929" y="65" viewBox="0 0 124 87" width="124" height="87">
            {clouds[1]}
        </svg>
        <svg x="1636" y="65" viewBox="0 0 124 87" width="124" height="87">
            {clouds[1]}
        </svg>
        <svg x="2443" y="74" viewBox="0 0 124 87" width="124" height="87">
            {clouds[1]}
        </svg>
        <svg x="397" y="110" viewBox="0 0 213 149" width="213" height="149">
            {clouds[2]}
        </svg>
        <svg x="1223" y="169" viewBox="0 0 213 149" width="213" height="149">
            {clouds[2]}
        </svg>
        <svg x="2037" y="103" viewBox="0 0 200 133" width="200" height="133">
            <path d="M136.399 26.7943L134.328 24.0859C123.584 10.0479 107.154 2 89.2663 2C65.9776 2 44.6871 16.6501 36.3032 38.4565L35.0917 41.6034L31.9302 42.7937C14.0281 49.5356 2 66.8651 2 85.915C2 111.326 22.7161 132 48.1817 132H136.399C165.402 132 189 108.425 189 79.4526C189 51.8825 167.391 28.852 139.806 27.0208L136.399 26.7943Z" />
        </svg>
    </svg>
);

const cloudsMed = (
    <svg
        id="clouds-med"
        width="2770"
        height="442"
        viewBox="0 0 2770 442"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2780 134.949V452H-10V127.7C7.12189 131.411 22.7875 137.161 35.5221 149.123C37.3088 150.348 39.0598 151.622 40.773 152.943C61.403 112.949 103.109 85.566 151.134 85.566C159.811 85.566 168.305 86.446 176.521 88.136C198.474 68.512 227.423 56.565 259.134 56.565C298.799 56.565 334.659 74.962 357.534 105.024C386.223 106.904 412.121 119.241 431.433 138.243C443.605 130.496 458.04 125.999 473.516 125.999C497.585 125.999 519.436 136.7 533.966 154.343C553.334 141.832 576.395 134.565 601.133 134.565C610.721 134.565 620.083 135.65 629.097 137.705C635.456 119.239 649.84 104.453 668.079 97.581C679.388 68.021 708.028 46.999 741.515 46.999C766.635 46.999 789.345 58.65 803.831 77.688C826.366 79.165 846.178 90.832 858.685 108.105C881.446 82.051 914.882 65.565 952.132 65.565C991.797 65.565 1027.66 83.962 1050.53 114.024C1074.43 115.59 1096.4 124.415 1114.23 138.303C1134.71 123.386 1159.9 114.565 1187.13 114.565C1226.8 114.565 1262.66 132.962 1285.53 163.024C1317.77 165.135 1346.48 180.446 1366.29 203.587C1377.99 188.296 1393.85 176.338 1412.17 169.436C1430.03 122.759 1475.25 89.565 1528.13 89.565C1560.44 89.565 1590.22 101.773 1612.52 122.544C1633.39 83.315 1674.67 56.565 1722.13 56.565C1761.8 56.565 1797.66 74.962 1820.53 105.024C1849.22 106.904 1875.12 119.241 1894.43 138.243C1906.6 130.496 1921.04 125.999 1936.51 125.999C1960.58 125.999 1982.43 136.7 1996.96 154.343C2016.33 141.832 2039.39 134.565 2064.13 134.565C2073.72 134.565 2083.08 135.65 2092.09 137.705C2098.45 119.239 2112.84 104.453 2131.08 97.581C2142.39 68.021 2171.02 46.999 2204.51 46.999C2229.63 46.999 2252.34 58.65 2266.83 77.688C2289.36 79.165 2309.18 90.832 2321.68 108.105C2344.44 82.051 2377.88 65.565 2415.13 65.565C2454.79 65.565 2490.65 83.962 2513.53 114.024C2531.85 115.224 2549.03 120.695 2564.09 129.437C2586.21 109.044 2615.72 96.565 2648.13 96.565C2677.04 96.565 2703.93 106.35 2725.25 123.299C2727.75 123.101 2730.27 123 2732.8 123C2749.69 123 2765.83 127.179 2780 134.949Z"
            fill="white"
            stroke="#e1e1e1"
            strokeWidth="2"
        />
    </svg>
);

const cloudsNear = (
    <svg
        id="clouds-near"
        width="2770"
        height="667"
        viewBox="0 0 2770 567"
        fill="#ffffff"
        stroke="#e1e1e1"
        strokeWidth="2">
        <svg x="736" y="239" viewBox="0 0 144 101" width="144" height="101">
            {clouds[3]}
        </svg>
        <svg x="1112" y="297" viewBox="0 0 144 101" width="144" height="101">
            {clouds[3]}
        </svg>
        <svg x="1931" y="407" viewBox="0 0 144 101" width="144" height="101">
            {clouds[3]}
        </svg>
        <svg x="2436" y="203" viewBox="0 0 144 101" width="144" height="101">
            {clouds[3]}
        </svg>
        <svg x="191" y="295" viewBox="0 0 292 203" width="292" height="203">
            {clouds[4]}
        </svg>
        <svg x="1378" y="295" viewBox="0 0 292 203" width="292" height="203">
            {clouds[4]}
        </svg>
    </svg>
);

class ObjectNotFoundPageInternal extends React.Component<RouteComponentProps> {
    public render(): JSX.Element {
        return (
            <>
                <CommonLayout data-tid="ObjectNotFoundPage" style={{ display: "block" }}>
                    <CommonLayout.GoBack to="..">Вернуться к списку объектов</CommonLayout.GoBack>
                    <CommonLayout.Content className={styles.content}>
                        <h2 className={styles.headerTitle} data-tid="Header">
                            Страница не найдена
                            <span className={styles.headerCode}> 404</span>
                        </h2>
                        <div className={styles.message}>В адресе есть ошибка или объект был удален.</div>
                    </CommonLayout.Content>
                </CommonLayout>
                <svg width="100%" height="500">
                    <svg
                        id="far"
                        width="5540"
                        height="667"
                        y={-100}
                        viewBox="0 0 5540 567"
                        xmlns="http://www.w3.org/2000/svg">
                        {cloudsFar}
                    </svg>
                    <svg
                        id="med"
                        width="5540"
                        height="667"
                        y={50}
                        viewBox="0 0 5540 567"
                        xmlns="http://www.w3.org/2000/svg">
                        {cloudsMed}
                    </svg>
                    <svg
                        id="near"
                        width="5540"
                        height="667"
                        y={-125}
                        viewBox="0 0 5540 567"
                        xmlns="http://www.w3.org/2000/svg">
                        {cloudsNear}
                    </svg>
                </svg>
            </>
        );
    }
}

export const ObjectNotFoundPage = withRouter(ObjectNotFoundPageInternal);
