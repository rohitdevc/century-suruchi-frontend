export interface MetaData {
    meta_title: string;
    meta_description: string;
    canonical_tag: string;
}

export interface Banner {
    banner_image: string;
}

export interface MasterSlider {
    master_slider_caption: string;
    master_slider_image: string;
}

export interface AboutIntro {
    about_intro_heading: string;
    about_intro_description: string;
    about_intro_image: string;
}

export interface CompanyObjective {
    company_objective_caption: string;
    company_objective_description: string;
    company_objective_image: string;
}

export interface Management {
    management_name: string;
    management_designation: string;
}

interface InvestorRelationReports {
    investor_relation_report_title: string;
    investor_relation_report_file: string;
}

interface InvestorRelationCategories {
    investor_relation_category_title: string;
    investor_relation_reports: InvestorRelationReports[];
}

export interface InvestorRelation {
    investor_relation_tab_title: string;
    investor_relation_tab_content?: string;
    investor_relation_categories: InvestorRelationCategories[];
}

export interface TokenResponse {
  token: string;
}
