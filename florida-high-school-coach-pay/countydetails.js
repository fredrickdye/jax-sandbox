
$.getJSON($('link[rel="paylist"]').attr("href"), function(data) {
    $(data).each(function() { output = "<div id=\"csscharts\"><dl class=\"chart\"><dt>Baseball</dt><dd><div class=\"bar dataslide\" style=\"width: " + this.BaeballPct + "%\">&dollar;" + this.Baseball + "</div></dd><dt>Basketball</dt><dd><div class=\"bar dataslide\" style=\"width: " + this.BasketballPct + "%\">&dollar;" + this.Basketball + "</div></dd><dt>Football</dt><dd><div class=\"bar dataslide\" style=\"width: " + this.FootballPct + "%\">&dollar;" + this.Football + "</div></dd><dt>Golf</dt><dd><div class=\"bar dataslide\" style=\"width: " + this.GolfPct + "%\">&dollar;" + this.Golf + "</div></dd><dt>Softball</dt><dd><div class=\"bar dataslide\" style=\"width: " + this.SoftballPct + "%\">&dollar;" + this.Softball + "</div></dd><dt>Soccer</dt><dd><div class=\"bar dataslide\" style=\"width: " + this.SoccerPct + "%\">&dollar;" + this.Soccer + "</div></dd><dt>Track</dt><dd><div class=\"bar dataslide\" style=\"width: " + this.TrackPct + "%\">&dollar;" + this.Track + "</div></dd><dt>Volleyball</dt><dd><div class=\"bar dataslide\" style=\"width: " + this.VolleyballPct + "%\">&dollar;" + this.Volleyball + "</div></dd></dl></div>";
    if (this.County == "Alachua"){
    $('#det-Alachua').append(output);
    }
    if (this.County == "Baker"){
    $('#det-Baker').append(output);
    }
    if (this.County == "Bay"){
    $('#det-Bay').append(output);
    }
    if (this.County == "Bradford"){
    $('#det-Bradford').append(output);
    }
    if (this.County == "Brevard"){
    $('#det-Brevard').append(output);
    }
    if (this.County == "Broward"){
    $('#det-Broward').append(output);
    }
    if (this.County == "Calhoun"){
    $('#det-Calhoun').append(output);
    }
    if (this.County == "Charlotte"){
    $('#det-Charlotte').append(output);
    }
    if (this.County == "Citrus"){
    $('#det-Citrus').append(output);
    }
    if (this.County == "Clay"){
    $('#det-Clay').append(output);
    }
    if (this.County == "Collier"){
    $('#det-Collier').append(output);
    }
    if (this.County == "Columbia"){
    $('#det-Columbia').append(output);
    }
    if (this.County == "DeSoto"){
    $('#det-DeSoto').append(output);
    }
    if (this.County == "Dixie"){
    $('#det-Dixie').append(output);
    }
    if (this.County == "Duval"){
    $('#det-Duval').append(output);
    }
    if (this.County == "Escambia"){
    $('#det-Escambia').append(output);
    }
    if (this.County == "Flagler"){
    $('#det-Flagler').append(output);
    }
    if (this.County == "Franklin"){
    $('#det-Franklin').append(output);
    }
    if (this.County == "Gadsden"){
    $('#det-Gadsden').append(output);
    }
    if (this.County == "Gilchrist"){
    $('#det-Gilchrist').append(output);
    }
    if (this.County == "Glades"){
    $('#det-Glades').append(output);
    }
    if (this.County == "Gulf"){
    $('#det-Gulf').append(output);
    }
    if (this.County == "Hamilton"){
    $('#det-Hamilton').append(output);
    }
    if (this.County == "Hardee"){
    $('#det-Hardee').append(output);
    }
    if (this.County == "Hendry"){
    $('#det-Hendry').append(output);
    }
    if (this.County == "Hernando"){
    $('#det-Hernando').append(output);
    }
    if (this.County == "Highlands"){
    $('#det-Highlands').append(output);
    }
    if (this.County == "Hillsborough"){
    $('#det-Hillsborough').append(output);
    }
    if (this.County == "Holmes"){
    $('#det-Holmes').append(output);
    }
    if (this.County == "Indian River"){
    $('#det-IndianRiver').append(output);
    }
    if (this.County == "Jackson"){
    $('#det-Jackson').append(output);
    }
    if (this.County == "Jefferson"){
    $('#det-Jefferson').append(output);
    }
    if (this.County == "Lafayette"){
    $('#det-Lafayette').append(output);
    }
    if (this.County == "Lake"){
    $('#det-Lake').append(output);
    }
    if (this.County == "Lee"){
    $('#det-Lee').append(output);
    }
    if (this.County == "Leon"){
    $('#det-Leon').append(output);
    }
    if (this.County == "Levy"){
    $('#det-Levy').append(output);
    }
    if (this.County == "Liberty"){
    $('#det-Liberty').append(output);
    }
    if (this.County == "Madison"){
    $('#det-Madison').append(output);
    }
    if (this.County == "Manatee"){
    $('#det-Manatee').append(output);
    }
    if (this.County == "Marion"){
    $('#det-Marion').append(output);
    }
    if (this.County == "Martin"){
    $('#det-Martin').append(output);
    }
    if (this.County == "Dade"){
    $('#det-Dade').append(output);
    }
    if (this.County == "Monroe"){
    $('#det-Monroe').append(output);
    }
    if (this.County == "Nassau"){
    $('#det-Nassau').append(output);
    }
    if (this.County == "Okaloosa"){
    $('#det-Okaloosa').append(output);
    }
    if (this.County == "Okeechobee"){
    $('#det-Okeechobee').append(output);
    }
    if (this.County == "Orange"){
    $('#det-Orange').append(output);
    }
    if (this.County == "Osceola"){
    $('#det-Osceola').append(output);
    }
    if (this.County == "Palm Beach"){
    $('#det-PalmBeach').append(output);
    }
    if (this.County == "Pasco"){
    $('#det-Pasco').append(output);
    }
    if (this.County == "Pinellas"){
    $('#det-Pinellas').append(output);
    }
    if (this.County == "Polk"){
    $('#det-Polk').append(output);
    }
    if (this.County == "Putnam"){
    $('#det-Putnam').append(output);
    }
    if (this.County == "Santa Rosa"){
    $('#det-SantaRosa').append(output);
    }
    if (this.County == "Sarasota"){
    $('#det-Sarasota').append(output);
    }
    if (this.County == "Seminole"){
    $('#det-Seminole').append(output);
    }
    if (this.County == "St. Johns"){
    $('#det-StJohns').append(output);
    }
    if (this.County == "St. Lucie"){
    $('#det-StLucie').append(output);
    }
    if (this.County == "Sumter"){
    $('#det-Sumter').append(output);
    }
    if (this.County == "Suwannee"){
    $('#det-Suwannee').append(output);
    }
    if (this.County == "Taylor"){
    $('#det-Taylor').append(output);
    }
    if (this.County == "Union"){
    $('#det-Union').append(output);
    }
    if (this.County == "Volusia"){
    $('#det-Volusia').append(output);
    }
    if (this.County == "Wakulla"){
    $('#det-Wakulla').append(output);
    }
    if (this.County == "Walton"){
    $('#det-Walton').append(output);
    }
    if (this.County == "Washington"){
    $('#det-Washington').append(output);
    }

    });
    });
