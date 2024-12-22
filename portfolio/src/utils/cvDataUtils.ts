import cvData from "../cv-data.ts";

export function getAllCvTechnologyNames() {
    return cvData?.technologies?.map(tech => tech.name) || [];
}

export function getCvTechnologyByName(name: string) {
    return cvData?.technologies?.find((tech) => tech.name === name);
}

export function getCvTechnologyIconByName(name: string) {
    return getCvTechnologyByName(name)?.Icon;
}