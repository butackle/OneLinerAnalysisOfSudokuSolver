import { BaseEncodingOptions } from "fs";

type folderPath = string;

type findRecursiveFolder = (findRecursiveFolderArgs: any) => void;

type isContinue = boolean;

type readDirOptions = BaseEncodingOptions & { withFileTypes: true };
