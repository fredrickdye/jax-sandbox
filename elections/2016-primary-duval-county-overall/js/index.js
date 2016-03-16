var chartData = {
    "barCircleDem":[
        {"index":0.3, "value":58632, "fill":"#084594", "label":"Hillary Clinton"},
        {"index":0.45, "value":26716, "fill":"#2171b5", "label":"Bernie Sanders"},
        {"index":0.6, "value":1939, "fill":"#4292c6", "label":"Martin O'Malley"},
    ],
    "barCircleRep":[
        {"index":0.3, "value":52588, "fill":"#99000d", "label":"Donald J. Trump"},
        {"index":0.45, "value":29844, "fill":"#cb181d", "label":"Marco Rubio"},
        {"index":0.6, "value":19957, "fill":"#fb6a4a", "label":"Ted Cruz"},
        {"index":0.75, "value":5638, "fill":"#ef3b2c", "label":"John R. Kasich"},
        {"index":0.9, "value":3546, "fill":"#fc9272", "label":"Others"},
    ]
};

function drawBarCircleChart(data,target,values,labels){
    var w = 362,
        h = 362,
        size = data[0].value * 1.15,
        radius = 200,
        sectorWidth = .15,
        radScale = 25,
        sectorScale = 1.45,
        target = d3.select(target),
        valueText = d3.select(values),
        labelText = d3.select(labels);


    var arc = d3.svg.arc()
        .innerRadius(function(d,i){return (d.index/sectorScale) * radius + radScale; })
        .outerRadius(function(d,i){return ((d.index/sectorScale) + (sectorWidth/sectorScale)) * radius + radScale; })
        .startAngle(Math.PI)
        .endAngle(function(d) { return Math.PI + (d.value / size) * 2 * Math.PI; });
    
    var path = target.selectAll("path")
        .data(data);

    // This is not great, but works
    path.enter().append("svg:path")
        .attr("fill",function(d,i){return d.fill})
        .attr("stroke","#D1D3D4")
        .transition()
        .ease("elastic")
        .duration(1000)
        .delay(function(d,i){return i*100})
        .attrTween("d", arcTween);
        
    valueText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x:50,
            y:function(d,i){return i*20.5},       
            "text-anchor":"end"
        })
        .text(function(d,i){return data[i].value});
    
    labelText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x:0,
            y:function(d,i){return i*20.5}
        })
        .text(function(d,i){return data[i].label});

    function arcTween(b) {
        var i = d3.interpolate({value: 0}, b);
        return function(t) {
            return arc(i(t));
        };
    }
}

// Animation
setTimeout(function(){drawBarCircleChart(chartData.barCircleRep,"#circleBar-rep-chart","#circleBar-rep-values","#circleBar-rep-labels")},500);
setTimeout(function(){drawBarCircleChart(chartData.barCircleDem,"#circleBar-dem-chart","#circleBar-dem-values","#circleBar-dem-labels")},800);

d3.select("#circleBar-rep-icon")
    .transition()
    .delay(500)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-rep-text")
    .transition()
    .delay(750)
    .duration(500)
    .attr("opacity","1");

d3.select("#circleBar-rep-clipLabels")
    .transition()
    .delay(600)
    .duration(1250)
    .attr("height","150");

d3.select("#circleBar-dem-icon")
    .transition()
    .delay(800)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-dem-text")
    .transition()
    .delay(1050)
    .duration(500)
    .attr("opacity","1");
d3.select("#circleBar-dem-clipLabels")
    .transition()
    .delay(900)
    .duration(1250)
    .attr("height","150");
