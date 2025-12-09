"use server";

import { apiFetch } from "./api";
import { getAuthToken } from './auth';
import {
    MetaData,
    Banner,
    MasterSlider,
    AboutIntro,
    CompanyObjective,
    Management,
    InvestorRelation
} from "@/types/api";

async function buildHeaders() {
    const { token } = await getAuthToken();
    
    return {
        Authorization: `Bearer ${token}`
    };
}

export const getMetaData = async () => apiFetch<MetaData>("meta-data", {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify({ page_name: "Home" })
});

export const getBanner = async () => apiFetch<Banner>("banner", {
    method: "POST",
    headers: await buildHeaders(),
    body: JSON.stringify({ page_name: "Home" })
});

export const getMasterSlider = async () => apiFetch<MasterSlider[]>("home/master-slider", {
    method: "GET",
    headers: await buildHeaders()
});

export const getAboutIntro = async () => apiFetch<AboutIntro>("home/about-intro", {
    method: "GET",
    headers: await buildHeaders()
});

export const getCompanyObjectives = async () => apiFetch<CompanyObjective[]>("home/company-objectives", {
    method: "GET",
    headers: await buildHeaders()
});

export const getManagement = async () => apiFetch<Management[]>("home/management", {
    method: "GET",
    headers: await buildHeaders()
});

export const getInvestorRelations = async () => apiFetch<InvestorRelation[]>("home/investor-relations", {
    method: "GET",
    headers: await buildHeaders()
});