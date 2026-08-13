"use server";

import { apiFetch } from "./api";
import {
    MetaData,
    Banner,
    MasterSlider,
    AboutIntro,
    CompanyObjective,
    Management,
    InvestorRelation
} from "@/types/api";

export const getMetaData = async () => apiFetch<MetaData>("meta-data", {
    method: "POST",
    body: JSON.stringify({ page_name: "Home" })
});

export const getBanner = async () => apiFetch<Banner>("banner", {
    method: "POST",
    body: JSON.stringify({ page_name: "Home" })
});

export const getMasterSlider = async () => apiFetch<MasterSlider[]>("home/master-slider", {
    method: "GET"
});

export const getAboutIntro = async () => apiFetch<AboutIntro>("home/about-intro", {
    method: "GET"
});

export const getCompanyObjectives = async () => apiFetch<CompanyObjective[]>("home/company-objectives", {
    method: "GET"
});

export const getManagement = async () => apiFetch<Management[]>("home/management", {
    method: "GET"
});

export const getInvestorRelations = async () => apiFetch<InvestorRelation[]>("home/investor-relations", {
    method: "GET"
});