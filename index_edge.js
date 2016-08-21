/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-276px', '200px', '550px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)",[270,[['rgba(65,65,65,1.00)',0],['rgba(255,255,255,0.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['86px', '18px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: Courier, 'Courier New', monospace;\">Welcome to RaJaKaR's GitHub</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, "rgba(0,0,0,0)", 0, 0, 0]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: true,
                    data: [
                        [
                            "eid141",
                            "background-image",
                            2000,
                            500,
                            "easeInOutCubic",
                            "${Rectangle}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(65,65,65,1.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid352",
                            "top",
                            3075,
                            0,
                            "easeInOutCubic",
                            "${Text}",
                            '18px',
                            '18px'
                        ],
                        [
                            "eid8",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid12",
                            "height",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid17",
                            "height",
                            1500,
                            500,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '10px',
                            '400px'
                        ],
                        [
                            "eid3",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid393",
                            "-moz-transform-origin",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid394",
                            "-ms-transform-origin",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid395",
                            "msTransformOrigin",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid396",
                            "-o-transform-origin",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid397",
                            "transform-origin",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid398",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid399",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid400",
                            "msTransformOrigin",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid401",
                            "-o-transform-origin",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid402",
                            "transform-origin",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid351",
                            "left",
                            3075,
                            0,
                            "easeInOutCubic",
                            "${Text}",
                            '86px',
                            '86px'
                        ],
                        [
                            "eid204",
                            "filter.blur",
                            2750,
                            500,
                            "easeInOutCubic",
                            "${Text}",
                            '5px',
                            '0px'
                        ],
                        [
                            "eid6",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle}",
                            '200px',
                            '200px'
                        ],
                        [
                            "eid16",
                            "top",
                            1000,
                            500,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '200px',
                            '0px'
                        ],
                        [
                            "eid10",
                            "width",
                            500,
                            500,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '275px',
                            '6px'
                        ],
                        [
                            "eid14",
                            "width",
                            1000,
                            500,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '6px',
                            '550px'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            500,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '-276px',
                            '0px'
                        ],
                        [
                            "eid9",
                            "left",
                            500,
                            500,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '0px',
                            '269px'
                        ],
                        [
                            "eid15",
                            "left",
                            1000,
                            500,
                            "easeInOutCubic",
                            "${Rectangle}",
                            '269px',
                            '0px'
                        ],
                        [
                            "eid18",
                            "background-color",
                            2000,
                            0,
                            "easeInOutCubic",
                            "${Rectangle}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid289",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${Text}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid208",
                            "opacity",
                            2500,
                            250,
                            "easeInOutCubic",
                            "${Text}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-67561745");
