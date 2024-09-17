
const reviews = [

    // -- Fruit and vegetables -> Cancers
    {
	"antecedent" : "fruitveg",
	"consequent" : "cancer",
	"prospero" : "",
	"lead" : "Dongni Zhang",
	"contributors" : "",
	"reviews" : [
	    {
		"estimand" : {
		    "exposure" : "Average daily fruit and vegetable consumption",
		    "outcome" : "Colorectum cancer"
		},
		"prospero" : "",
		"publications" : "",
		"status" : "ongoing"
	    },
	    {
		"estimand" : {
		    "exposure" : "Average daily fruit and vegetable consumption",
		    "outcome" : "Breast cancer"
		},
		"prospero" : "",
		"publications" : "",
		"status" : "ongoing"
	    }
	]

    },

    // -- Physical activity -> Cancers
    {
	"antecedent" : "pa",
	"consequent" : "cancer",
	"prospero" : "",
	"lead" : "Dongni Zhang",
	"contributors" : "",
	"reviews" : [
	    {
		"estimand" : {
		    "exposure" : "Moderate to vigorous physical activity per week",
		    "outcome" : "Colorectum cancer"
		},
		"prospero" : "",
		"publications" : "",
		"status" : "ongoing"
	    },
	    {
		"estimand" : {
		    "exposure" : "Moderate to vigorous physical activity per week",
		    "outcome" : "Breast cancer"
		},
		"prospero" : "",
		"publications" : "",
		"status" : "ongoing"
	    }
	]

    },



    // -- Alcohol -> Cancers
    {
	"antecedent" : "alcohol",
	"consequent" : "cancer",
	"lead" : "Marcus Bendtsen",
	"contributors" : "",
	"reviews" : [
	    {
		"estimand" : {
		    "exposure" : "Weekly consumption",
		    "outcome" : "Breast cancer"
		},
		"prospero" : "",
		"publications" : "",
		"status" : "ongoing"
	    },
	    {
		"estimand" : {
		    "exposure" : "Weekly consumption",
		    "outcome" : "Colorectum cancer"
		},
		"prospero" : "",
		"publications" : "",
		"status" : "ongoing"
	    },
	    {
		"estimand" : {
		    "exposure" : "Weekly consumption",
		    "outcome" : "Liver cancer"
		},
		"prospero" : "Not available",
		//"status" : "completed",
		"publications" : [
		    {
			"href" : "Google.com",
			"label" : "Test publication"
		    }
		]

	    },
	    {
		"estimand" : {
		    "exposure" : "Heavy episodic drinking",
		    "outcome" : "Colorectum cancer"
		},
		"prospero" : "",
		"publications" : "",
		//"status" : "tabled",
		"comment" : "We could not find..."
	    },
	]
    },




    {
	"antecedent" : "alcohol",
	"consequent" : "cvd",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : ""
    },

    {
	"antecedent" : "alcohol",
	"consequent" : "respiratory",
	"prospero" : "",
	"lead" : ""
    },
    {
	"antecedent" : "alcohol",
	"consequent" : "diabetes",
	"prospero" : "",
	"lead" : ""
    },
    {
	"antecedent" : "alcohol",
	"consequent" : "liver",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "alcohol",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "alcohol",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "alcohol",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "Elizabeth S. Collier",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },

    {
	"antecedent" : "alcohol",
	"consequent" : "sud",
	"lead" : "Gillian W. Shorter",
	"contributors" : "",
	"propsero" : "",
	"status" : "ongoing"
    },

    {
	"antecedent" : "alcohol_others",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "alcohol_others",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "alcohol_others",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "alcohol_others",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- Diet -> NCD, MHC
    {
	"antecedent" : "diet",
	"consequent" : "cvd",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet",
	"consequent" : "respiratory",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet",
	"consequent" : "diabetes",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet",
	"consequent" : "liver",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "Joel Crawford",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "diet",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "Joel Crawford",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "diet",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "Joel Crawford",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "diet",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "Joel Crawford",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "diet_others",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet_others",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet_others",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet_others",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },



    // -- PA -> NCD, MHC
    {
	"antecedent" : "pa",
	"consequent" : "cvd",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa",
	"consequent" : "respiratory",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa",
	"consequent" : "diabetes",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa",
	"consequent" : "liver",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "Joel Crawford",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "pa",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "Joel Crawford",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "pa",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "Joel Crawford",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "pa",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "Joel Crawford",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "pa_others",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa_others",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa_others",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa_others",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- Smoking -> NCD, MHC
    {
	"antecedent" : "smoking",
	"consequent" : "cvd",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "smoking",
	"consequent" : "cancer",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "smoking",
	"consequent" : "respiratory",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "smoking",
	"consequent" : "diabetes",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "smoking",
	"consequent" : "liver",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "smoking",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "smoking",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "smoking",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "smoking",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "smoking_others",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "smoking_others",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "smoking_others",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "smoking_others",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- NCD,MHC -> Alcohol
    {
	"antecedent" : "cvd",
	"consequent" : "alcohol",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "alcohol",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "alcohol",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "alcohol",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "alcohol",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "alcohol_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "alcohol_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "alcohol_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "alcohol_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "alcohol_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "alcohol",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "dep",
	"consequent" : "alcohol",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "ed",
	"consequent" : "alcohol",
	"prospero" : "",
	"lead" : "Elizabeth S. Collier",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "sud",
	"consequent" : "alcohol",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "gad",
	"consequent" : "alcohol_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "alcohol_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "alcohol_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "alcohol_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- NCD,MHC -> Diet
    {
	"antecedent" : "cvd",
	"consequent" : "diet",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "diet",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "diet",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "diet",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "diet",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "diet_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "diet_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "diet_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "diet_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "diet_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "diet",
	"prospero" : "",
	"lead" : "Elizabeth S. Collier",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "dep",
	"consequent" : "diet",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "ed",
	"consequent" : "diet",
	"prospero" : "",
	"lead" : "Elizabeth S. Collier",
	"contributors" : "",
	"publications" : "",
	"status" : "ongoing"
    },
    {
	"antecedent" : "sud",
	"consequent" : "diet",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : "",
	"status" : "prioritized"
    },
    {
	"antecedent" : "gad",
	"consequent" : "diet_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "diet_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "diet_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "diet_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- NCD,MHC -> Physical activity
    {
	"antecedent" : "cvd",
	"consequent" : "pa",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "pa",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "pa",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "pa",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "pa",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "pa_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "pa_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "pa_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "pa_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "pa_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "pa",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "pa",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "pa",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "pa",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "pa_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "pa_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "pa_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "pa_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- NCD,MHC -> Smoking
    {
	"antecedent" : "cvd",
	"consequent" : "smoking",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "smoking",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "smoking",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "smoking",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "smoking",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "smoking_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "smoking_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "smoking_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "smoking_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "smoking_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "smoking",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "smoking",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "smoking",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "smoking",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "smoking_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "smoking_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "smoking_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "smoking_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- NCD -> MHC
    {
	"antecedent" : "cvd",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "gad_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "gad_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "gad_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "gad_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "gad_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "dep_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "dep_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "dep_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "dep_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "dep_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "ed_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "ed_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "ed_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "ed_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "ed_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "sud_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancer",
	"consequent" : "sud_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "sud_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "sud_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "sud_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- MHC -> NCD
    {
	"antecedent" : "gad",
	"consequent" : "cvd",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "cvd",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "cvd",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "cvd",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "cancers",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "cancers",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "cancers",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "cancers",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "respiratory",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "respiratory",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "respiratory",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "respiratory",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "diabetes",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "diabetes",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "diabetes",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "diabetes",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "liver",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "liver",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "liver",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "liver",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- MHC -> MHC
    {
	"antecedent" : "gad",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "sud",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "gad",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "dep",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "ed",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- MHC -> MHC (others)
    {
	"antecedent" : "gad",
	"consequent" : "dep_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "ed_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "sud_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "gad_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "ed_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "sud_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "gad_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "dep_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "sud_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "gad_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "dep_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "ed_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },

    
    // -- NCD,MHC -> Mortality and QALY
    {
	"antecedent" : "cvd",
	"consequent" : "mortality",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancers",
	"consequent" : "mortality",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "mortality",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "mortality",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "mortality",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "mortality",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "mortality",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "mortality",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "mortality",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "qaly",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancers",
	"consequent" : "qaly",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "qaly",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "qaly",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "qaly",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "qaly",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "qaly",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "qaly",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "qaly",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cvd",
	"consequent" : "qaly_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancers",
	"consequent" : "qaly_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "qaly_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "qaly_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "qaly_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "qaly_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "qaly_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "qaly_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "qaly_others",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- NCD,MHC -> Healthcare costs
    {
	"antecedent" : "cvd",
	"consequent" : "cost",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "cancers",
	"consequent" : "cost",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "respiratory",
	"consequent" : "cost",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diabetes",
	"consequent" : "cost",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "liver",
	"consequent" : "cost",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "gad",
	"consequent" : "cost",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "dep",
	"consequent" : "cost",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "ed",
	"consequent" : "cost",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "sud",
	"consequent" : "cost",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },


    // -- Behavior -> environment
    {
	"antecedent" : "alcohol",
	"consequent" : "air",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "alcohol",
	"consequent" : "water",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "alcohol",
	"consequent" : "soil",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "alcohol",
	"consequent" : "waste",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet",
	"consequent" : "air",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet",
	"consequent" : "water",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet",
	"consequent" : "soil",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "diet",
	"consequent" : "waste",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa",
	"consequent" : "air",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa",
	"consequent" : "water",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa",
	"consequent" : "soil",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "pa",
	"consequent" : "waste",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "smoking",
	"consequent" : "air",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "smoking",
	"consequent" : "water",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "smoking",
	"consequent" : "soil",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },
    {
	"antecedent" : "smoking",
	"consequent" : "waste",
	"prospero" : "",
	"lead" : "",
	"contributors" : "",
	"publications" : ""
    },

]
