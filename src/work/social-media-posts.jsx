import React, { useState, useEffect } from 'react';
import FooterSection from '../components/FooterSection.jsx';
import Masonry from './Masonry';

// --- Image Data Array ---
const items = [
  // --- Images from the 'Images/ceo-lawyer-sm-post' folder ---
  {
    id: "1",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009159/HPE_products-01_aokkgy.jpg",
  },
  {
    id: "2",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009176/Infographics_post_egdf6m.jpg",
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009176/Labour_day-01_bqaxmk.jpg",
  },
  {
    id: "4",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009158/Hiring-Post-01_vdeq6f.jpg",
  },
  {
    id: "5",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009156/halloween_sales_post-01_ksevrv.jpg",
  },
  {
    id: "6",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009157/Happy_weekend-01_qs2ctp.jpg",
  },
  {
    id: "7",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009155/halloween_discount-01_vrrf8z.jpg",
  },
  {
    id: "8",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009155/EOS_reminder_a1pxvy.jpg",
  },
  {
    id: "9",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009140/email_card_new_year-01_vxla58.jpg",
  },

  {
    id: "10",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009136/Did_you_know_orange_-01_rundyj.jpg",
  },
  {
    id: "11",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009136/Desktop_zmeovm.jpg",
  },
  {
    id: "12",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009135/e_commerce-01_hhckfi.jpg",
  },
  {
    id: "13",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009135/Defence_Day_2-01_vqlukc.jpg",
  },
  {
    id: "14",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009134/Dreaming-of-publishing_n6yobz.jpg",
  },
  {
    id: "15",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009135/Did-you-know_t2lysd.jpg",
  },
  {
    id: "16",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009136/E-book-post_wktp95.jpg",
  },
  {
    id: "17",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009135/Easter_day-02_v7bk8r.jpg", // CORRECTED to .png
  },
  {
    id: "18",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009133/Defence-day_kjae6a.jpg",
  },
  {
    id: "19",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009119/Customer_satisfaction-01_m2miiy.jpg",
  },
  {
    id: "20",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009116/D_link-01_lelfd4.jpg",
  },
  {
    id: "21",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009116/Core-Digital_tnpe2d.jpg",
  },
  {
    id: "22",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009112/Columbus_day-01_dt3cij.jpg",
  },
  {
    id: "23",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009111/Cloud_migration-01_a5rswi.jpg",
  },

  {
    id: "25",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009108/Cloud_Infrastructure-01_b2vvao.jpg",
  },
  {
    id: "26",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009102/Cisco_3900_Series_Router-01_alw1wd.jpg", // CORRECTED to .png
  },
  {
    id: "27",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009102/christmas_social_media-01_lcgrfn.jpg",
  },
  {
    id: "28",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009102/Client_Review-01_i7kfpu.jpg",
  },
  {
    id: "29",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009101/Christmas_day_1-02_xziuy3.jpg",
  },
  {
    id: "30",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009100/Catalyst_9300_8_x_10GE_Network-01_with_logo-01_bb7iag.jpg",
  },
  {
    id: "31",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009098/breast_cancer-01_htbutt.jpg",
  },
  {
    id: "32",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009092/branding_is_key-01_tlfaiu.jpg",
  },
  {
    id: "33",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009088/Book-cover-reveal_d5qwby.jpg",
  },
  {
    id: "34",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009088/Brand_awarness_2nd_design-01_ig3ynk.jpg",
  },
  {
    id: "35",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009087/behind-the-books2_jnpfsv.jpg",
  },
  {
    id: "36",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009088/Asset_Management-01_n3u5yk.jpg",
  },
  {
    id: "37",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009086/360_Digital_Agency-01_sgpiuq.jpg",
  },
  {
    id: "38",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009086/14_august-01_u7umtn.jpg",
  },
  {
    id: "39",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009079/14_august_2nd-02_ktbd4f.jpg",
  },
  {
    id: "40",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009077/5-01_vrndiu.jpg",
  },
  {
    id: "41",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009077/6_tips-01_el0wii.jpg",
  },
  {
    id: "43",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009053/3-01_trmvz0.jpg",
  },
  {
    id: "44",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009051/3-Core-values_coc3vv.jpg",
  },
  {
    id: "45",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009051/3_design-01_vcwgoc.jpg",
  },
  {
    id: "46",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009039/2ND_Design-02_roz0jo.jpg",
  },
  {
    id: "47",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009035/2nd_design_zbh60m.jpg",
  },
  {
    id: "48",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009036/2-01_kzk8ai.jpg",
  },
  {
    id: "49",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009035/2nd_design-01_ydmydz.jpg",
  },
  {
    id: "50",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009033/1st_post-01_yskgce.jpg",
  },
  {
    id: "51",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009026/1st_design-01_fkftek.jpg",
  },
  {
    id: "52",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009019/1-01_kohx7q.jpg",
  },
  {
    id: "53",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009017/1_ulxbg1.jpg",
  },
  {
    id: "54",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008839/Work-anniversary-post_fka78i.jpg",
  },
  {
    id: "55",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008834/Testimonial-3_iw9cxu.jpg",
  },
  {
    id: "56",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008838/we-have-strategy_o6ezdq.jpg",
  },
  {
    id: "57",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008837/WE-BUILD-Website-_Faccebook-_-Instagram_jvs2nh.jpg",
  },
  {
    id: "58",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008838/SEO-Ranking_shrotg.jpg",
  },
  {
    id: "59",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008839/Think-Digital-think-us_alnezk.jpg",
  },
  {
    id: "60",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008834/Testimonial-1_qkipbh.jpg",
  },
  {
    id: "61",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008835/think-digital-instagram.jpg_eauams.jpg",
  },
  {
    id: "62",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008835/Testimonial-2_uek0bm.jpg",
  },
  {
    id: "63",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008834/Tamplates-2_esopcu.jpg",
  },
  {
    id: "64",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008833/Tamplates-1_y65uq2.jpg",
  },
  {
    id: "65",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008832/post_6_qvdufb.png",
  },
  {
    id: "66",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008833/seo-instagram.jpg_ni4big.jpg",
  },
  {
    id: "67",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008830/Qoute-post-2_yq5ke5.jpg",
  },
  {
    id: "68",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008829/promoted_post-02_xhqsjq.jpg",
  },
  {
    id: "69",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008833/social-media-funnel-instagram.jpg_xcy7t8.jpg",
  },
  {
    id: "70",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008831/Company-tamplates-1_rsdojn.jpg",
  },
  {
    id: "71",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008831/qualified-leads-instagram.jpg_g2h1ic.jpg",
  },
  {
    id: "72",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008831/Saudia-Arab-national-Day_ueiaem.jpg",
  },
  {
    id: "73",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008830/post_5_vecfsc.jpg",
  },
  {
    id: "74",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008830/Qoute-post_dlnzfh.jpg",
  },
  {
    id: "75",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008829/promoted_post-01_yfuit4.jpg",
  },
  {
    id: "76",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008827/National_Day_wlpkqy.png",
  },
  {
    id: "77",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008827/essential-characteristics-instagram.jpg_ybisqu.jpg",
  },
  {
    id: "78",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008826/Digital_advertiment_jek4fl.jpg",
  },
  {
    id: "79",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008826/Company-tamplates-5_ewglxu.jpg",
  },
  {
    id: "80",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008825/google-ads-instagram.jpg_fqjrdg.jpg",
  },
  {
    id: "81",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008824/did-you-know-instagram.jpg_irkb2v.jpg",
  },
  {
    id: "82",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008822/Company-tamplates-2_vymwuk.jpg",
  },
  {
    id: "83",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008822/Company-tamplates-2_vymwuk.jpg",
  },
  {
    id: "84",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008820/post_2_z1todh.jpg",
  },
  {
    id: "85",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008821/Company-tamplates_j9wxue.jpg",
  },
  {
    id: "86",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008824/post_3_zcnnp0.png",
  },
  {
    id: "87",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008824/Company-tamplates-3_segrqc.jpg",
  },
  {
    id: "88",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008820/CEO-Academy-P3_rvvstc.jpg",
  },
  {
    id: "89",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008823/post_4_xw22sp.jpg",
  },
  {
    id: "90",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008823/CEO_Academy12__nq2etg.jpg",
  },
  {
    id: "91",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008819/Awad_PodFlyer_5_out_now_xggsgf.jpg",
  },
  {
    id: "92",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008819/CEO-Academy-P4_qax2df.jpg",
  },
  {
    id: "93",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008817/new-month-new-grind-instagram.jpg_xhx9fl.jpg",
  },
  {
    id: "94",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008817/post_1_mdkdln.jpg",
  },
  {
    id: "95",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008816/360-digital-agency-instagram.jpg_fujrqp.jpg",
  },
  {
    id: "96",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008816/about-your-business-instagram.jpg_aavn9v.jpg",
  },
  {
    id: "97",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008816/Need-a-website_daofpm.jpg",
  },
  {
    id: "98",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008816/nd-hiring-post-2_mfsjvk.jpg",
  },
  {
    id: "99",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764008815/14-august-instagram.jpg_a7p73p.jpg",
  },
  {
    id: "100",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009336/17_zvadvr.png",
  },
  {
    id: "101",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009335/14_y6wqdo.jpg",
  },
  {
    id: "102",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009335/7_swdtma.jpg",
  },
  {
    id: "103",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009330/18_1_kbfqut.jpg",
  },
  {
    id: "104",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009329/18_2_jkplho.jpg",
  },
  {
    id: "105",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009328/16_efrr9j.jpg",
  },
  {
    id: "106",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009327/13_fwsrv6.jpg",
  },
  {
    id: "107",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009326/8_kd2dh1.png",
  },
  {
    id: "108",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009327/15_lqkkkv.png",
  },
  {
    id: "109",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009326/10_obvev8.jpg",
  },
  {
    id: "110",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009325/11_zllz3t.jpg",
  },
  {
    id: "111",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009326/12_sy00i5.jpg",
  },
  {
    id: "112",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009322/2_fuwxkg.jpg",
  },
  {
    id: "113",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009323/9_sbddxs.jpg",
  },
  {
    id: "114",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009322/1_sgqoql.jpg",
  },
  {
    id: "115",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009322/3_xda1w9.jpg",
  },
  {
    id: "116",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009321/4_fcdu5n.jpg",
  },
  {
    id: "117",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009313/5_proakw.jpg",
  },
  {
    id: "118",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009313/6_axn3c4.jpg",
  },
  {
    id: "119",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009285/Zero-trust-security_bjveps.jpg",
  },
  {
    id: "120",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009284/WS-C3850-01_zhdzxj.jpg",
  },
  {
    id: "121",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009264/World_Autsim_Day-01_q4ez8t.jpg",
  },
  {
    id: "122",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009265/Work-with-us_zeimez.jpg",
  },
  {
    id: "123",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009263/women_s_day-01_lazfze.jpg",
  },
  {
    id: "124",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009262/website_develppment-01-01_gwfyue.jpg",
  },
  {
    id: "125",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009263/We_Offer_oiftce.jpg",
  },
  {
    id: "126",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009261/Wednesday_post-01_zxk7zf.jpg",
  },
  {
    id: "127",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009261/weekend_motivation-01_v80hmc.jpg",
  },
  {
    id: "128",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009252/Time_is_Ticking..-01_wbgg91.jpg",
  },
  {
    id: "129",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009250/We_Design_SMM_post_lk6vxw.jpg",
  },
  {
    id: "130",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009250/TIME_GLASS-01_vlisqd.jpg",
  },
  {
    id: "131",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009249/Veteran_s_Day-01_c5qsdq.jpg",
  },
  {
    id: "132",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009248/Think-before-you-click_ncjc51.jpg",
  },
  {
    id: "133",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009248/Teachers_day-01_plda4n.jpg",
  },
  {
    id: "134",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009221/Social-Media-myth_r1aauy.jpg",
  },
  {
    id: "135",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009221/Quick_Tips-01_mkn1jc.jpg",
  },
  {
    id: "136",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009220/Software-Updates_kumzmu.jpg",
  },
  {
    id: "137",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009221/Target_Strategy_glg3mz.jpg",
  },
  {
    id: "138",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009220/Project-Manager_uznsas.jpg",
  },
  {
    id: "139",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009219/Reaction_post-01_ecajhu.jpg",
  },
  {
    id: "140",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009220/Smart_word_kij2fe.jpg",
  },
  {
    id: "141",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009221/Success_post-01_aesshb.jpg",
  },
  {
    id: "142",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009219/Review-Post_zhtsq4.jpg",
  },
  {
    id: "143",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009219/post-01_l88uwy.jpg",
  },
  {
    id: "144",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009205/meet_the_team_copy_nhnymy.jpg",
  },
  {
    id: "145",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009201/Motivated_1_euebzu.jpg",
  },
  {
    id: "146",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009201/Poll-Marketing_vh028b.jpg",
  },
  {
    id: "147",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009200/new_year_post_2025_-02_hbbicp.jpg",
  },
  {
    id: "148",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009201/online_business-01_qc6fth.jpg",
  },
  {
    id: "149",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009200/motivation_posr-01_szi8ys.jpg",
  },
  {
    id: "150",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009200/motivation_4-01_lvfys3.jpg",
  },
  {
    id: "151",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009199/Monday_motivate_1_q8ygvf.jpg",
  },
  {
    id: "152",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009180/Lenove_wrokstation-01_w4grlv.jpg",
  }, {
    id: "153",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009180/marketing_qoutes-01_azpnlg.jpg",
  }, {
    id: "154",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009179/louis_martin-01_iks0nj.jpg",
  },
    {
    id: "155",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009178/Jummah-Mubarak_tnn5zi.jpg",
  }, {
    id: "156",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009177/junper_stock-01_jbkwwg.jpg",
  }, {
    id: "157",
    img: "https://res.cloudinary.com/diaszaste/image/upload/v1764009177/HPE_proliant_GEN_10-01_xs8gco.jpg",
  },
];
// --- End Image Data Array ---


// Utility function to pre-load all images and resolve when done
const preloadImages = (imageUrls) => {
  const promises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
      img.onerror = reject; // Handle errors if necessary
    });
  });
  // Wait for all image promises to resolve
  return Promise.all(promises);
};

// Simple Loading Component
const LoadingScreen = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '60vh', 
    fontSize: '1.2em',
    color: '#333',
    background: '#f8f8f8'
  }}>
    <div style={{ 
      border: '4px solid #f3f3f3', 
      borderTop: '4px solid #3498db', 
      borderRadius: '50%', 
      width: '40px', 
      height: '40px', 
      animation: 'spin 1s linear infinite'
    }} />
    <p style={{ marginTop: '15px' }}>Loading posts...</p>

    {/* You might need to define the @keyframes for 'spin' in your global CSS or styled-components */}
    {/* For a pure in-line solution, this is a limitation, but it shows the intent */}
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);


function SocialMediaPost() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Extract all image URLs from the items array
    const imageUrls = items.map(item => item.img);

    // 2. Pre-load the images
    preloadImages(imageUrls)
      .then(() => {
        // 3. Set loading to false once all images are loaded
        console.log("All images pre-loaded!");
        // Small delay added here to make the loading screen visible 
        // even if images load too fast. (Optional)
        setTimeout(() => {
            setIsLoading(false);
        }, 500); 
      })
      .catch(error => {
        console.error("Error pre-loading images:", error);
        // Fallback: stop the loading screen even if some images fail to load
        setIsLoading(false); 
      });
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div className="WorksPage" >
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      )}
      <FooterSection /> 
    </div>
  );
}


export default SocialMediaPost;
