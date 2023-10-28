if (!window.Scribd)
    Scribd = {};
Scribd.Brand = 'legacy';
Scribd.NwayTestsWithWeights = {
    "recs_docpage_noindex": {
        "id": 2003,
        "choices": {
            "4904": {
                "name": "control",
                "weight": 0
            },
            "4905": {
                "name": "omit",
                "weight": 1
            }
        }
    },
    "recs_semantic_embedding_c": {
        "id": 2103,
        "choices": {
            "5171": {
                "name": "control",
                "weight": 0
            },
            "5172": {
                "name": "sort_only",
                "weight": 0
            },
            "5173": {
                "name": "dedup_and_sort",
                "weight": 1
            }
        }
    },
    "account_creation_design_2022_v3": {
        "id": 2138,
        "choices": {
            "5257": {
                "name": "control",
                "weight": 1
            },
            "5258": {
                "name": "test",
                "weight": 0
            }
        }
    },
    "behavior_tag_nway": {
        "id": 2577,
        "choices": {
            "6516": {
                "name": "control",
                "weight": 1
            },
            "6517": {
                "name": "test",
                "weight": 0
            }
        }
    },
    "recs_cross_recommendations_ugc_c": {
        "id": 2120,
        "choices": {
            "5210": {
                "name": "control",
                "weight": 1
            },
            "5211": {
                "name": "clumped",
                "weight": 0
            },
            "5212": {
                "name": "dispersed",
                "weight": 0
            }
        }
    },
    "google_one_tap_2023_q2": {
        "id": 2515,
        "choices": {
            "6336": {
                "name": "control",
                "weight": 1
            },
            "6337": {
                "name": "variant_a_no_checkout",
                "weight": 0
            },
            "6338": {
                "name": "variant_b_with_checkout",
                "weight": 99
            }
        }
    },
    "osano_metrics_feature_flag_2022_q3": {
        "id": 2206,
        "choices": {
            "5436": {
                "name": "disabled",
                "weight": 0
            },
            "5437": {
                "name": "enabled",
                "weight": 100
            }
        }
    },
    "recs_item_similarity_ugc_en_q322_c": {
        "id": 2264,
        "choices": {
            "5581": {
                "name": "item_similarity_ebr",
                "weight": 0
            },
            "5582": {
                "name": "item_similarity_ebr_tuned",
                "weight": 0
            },
            "5583": {
                "name": "control",
                "weight": 0
            },
            "5584": {
                "name": "content_model_sql",
                "weight": 100
            },
            "5585": {
                "name": "spark_merger_sql",
                "weight": 0
            }
        }
    },
    "auth0_feature_flag": {
        "id": 2624,
        "choices": {
            "6647": {
                "name": "control",
                "weight": 0
            },
            "6648": {
                "name": "auth0",
                "weight": 1
            }
        }
    },
    "personalized_archive_offer": {
        "id": 1615,
        "choices": {
            "3993": {
                "name": "control",
                "weight": 0
            },
            "3994": {
                "name": "personalized",
                "weight": 93
            },
            "3995": {
                "name": "subscribe_only",
                "weight": 1
            },
            "3996": {
                "name": "subscribe_or_upload_1",
                "weight": 1
            },
            "3997": {
                "name": "subscribe_or_upload_3",
                "weight": 1
            },
            "3998": {
                "name": "subscribe_or_upload_5",
                "weight": 1
            },
            "3999": {
                "name": "upload_1_or_subscribe",
                "weight": 1
            },
            "4000": {
                "name": "upload_3_or_subscribe",
                "weight": 1
            },
            "4001": {
                "name": "upload_5_or_subscribe",
                "weight": 1
            }
        }
    },
    "recs_doc_page_ugc_q123_c": {
        "id": 2339,
        "choices": {
            "5810": {
                "name": "control",
                "weight": 0
            },
            "5811": {
                "name": "control_no_fallback",
                "weight": 0
            },
            "5812": {
                "name": "content_model",
                "weight": 0
            },
            "5813": {
                "name": "content_model_2",
                "weight": 100
            }
        }
    },
    "recs_doc_page_pmp_q123_c": {
        "id": 2406,
        "choices": {
            "6021": {
                "name": "control",
                "weight": 0
            },
            "6022": {
                "name": "content_model_2_reorder_no_weight",
                "weight": 100
            },
            "6023": {
                "name": "content_model_2_reorder_weighted",
                "weight": 0
            }
        }
    },
    "recs_doc_page_metadata_v1_c": {
        "id": 2431,
        "choices": {
            "6100": {
                "name": "control",
                "weight": 0
            },
            "6101": {
                "name": "test",
                "weight": 4
            }
        }
    },
    "recs_item_similarity_q122_c": {
        "id": 2289,
        "choices": {
            "5659": {
                "name": "item_similarity_ebr",
                "weight": 100
            },
            "5660": {
                "name": "content_model_sql",
                "weight": 0
            }
        }
    }
};
Scribd.Sentry = {
    "disabled": false,
    "dsn": "https://21588782029b459685064c03453673ff@sentry.io/282187",
    "environment": "production",
    "page": "",
    "release": "cbfce7d43d22c271fa8b10475a712a01820e6139",
    "queue": {
        "errors": [],
        "messages": []
    }
};
Scribd.ServerOptions = {
    "facebook_autologin_enabled": false,
    "largest_contentful_paint": 100,
    "payments_store_disabled": false,
    "reading_progress_enabled": true,
    "reading_progress_throttle_get_milliseconds": 60000,
    "reading_progress_throttle_post_milliseconds": 10000
};
