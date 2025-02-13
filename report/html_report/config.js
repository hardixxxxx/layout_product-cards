report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card.png",
        "test": "..\\bitmaps_test\\20250213-205750\\Card_with_data-qa_card.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 13.648648648648647,
          "misMatchPercentage": "13.65",
          "analysisTime": 8
        },
        "diffImage": "..\\bitmaps_test\\20250213-205750\\failed_diff_Card_with_data-qa_card.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover.png",
        "test": "..\\bitmaps_test\\20250213-205750\\Link_with_data-qa_hover.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Link_with_data-qa_hover.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 14.245700245700247,
          "misMatchPercentage": "14.25",
          "analysisTime": 8
        },
        "diffImage": "..\\bitmaps_test\\20250213-205750\\failed_diff_Link_with_data-qa_hover.png"
      },
      "status": "fail"
    }
  ]
});