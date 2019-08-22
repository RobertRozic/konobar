<template>
    <a class="page-404 flex-center" href="/">
        <svg width="855px" height="441px" viewBox="0 0 855 441" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g class="path" id="Web" stroke-width="1" fill="white" fill-rule="evenodd">
                <g id="SPARK-&#45;&#45;404" transform="translate(-293.000000, -190.000000)" stroke="#D4D6E2" stroke-width="2">
                    <g id="path" transform="translate(295.000000, 194.000000)">
                        <polygon id="Path-4" points="161 0 0 258 161 258"></polygon>
                        <polygon id="Path-6" transform="translate(202.500000, 345.000000) scale(-1, 1) translate(-202.500000, -345.000000) " points="244 258 161 258 244 432"></polygon>
                        <polygon id="Path-4-Copy" points="768 0 607 258 768 258"></polygon>
                        <polygon id="Path-4-Copy-2" transform="translate(425.000000, 190.000000) scale(1, -1) translate(-425.000000, -190.000000) " points="547 0 303 380 547 380"></polygon>
                        <polygon id="Path-4-Copy-3" transform="translate(425.000000, 242.000000) scale(-1, 1) translate(-425.000000, -242.000000) " points="547 52 303 432 547 432"></polygon>
                        <polygon id="Path-6-Copy" transform="translate(809.500000, 345.000000) scale(-1, 1) translate(-809.500000, -345.000000) " points="851 258 768 258 851 432"></polygon>
                    </g>
                </g>
            </g>
        </svg>
    </a>
</template>

<style lang="scss" scoped>
    .page-404 {
        flex: 1;
        transition: transform .8s;
        overflow: hidden;
        svg {
            transition: transform .8s;
        }
    }
    .page-404:hover {
        svg {
            -ms-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            transform-origin: center;
        }
    }
    .path {
        stroke-dasharray: 1100;
        stroke-dashoffset: 1100;
        animation: dash 3s linear forwards;
    }
    @keyframes dash {
        from {
            fill:white;
            stroke-dashoffset: 1000;
        }
        70%{
            fill:white;
            stroke-width: 0;
            stroke-dashoffset: 0;
        }
        to {
            fill:#E45425;
            stroke: #E45425;
        }
    }
</style>