import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import project from "./sanity/schemas/project-schemas";

export const config = defineConfig({

projectId: "b7xuehc5",
dataset: "production",
title: "My Personal Website",
apiVersion: "2021-04-10",
basePath: "/admin",
plugins: [deskTool()],
schema: {types: [project]}

});