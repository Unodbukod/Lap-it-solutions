-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('checkmark', 'crossmark');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "companyAddress" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeaturesContent" (
    "id" SERIAL NOT NULL,
    "contentName" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeaturesContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandingpagehomeContent" (
    "id" SERIAL NOT NULL,
    "contentName" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LandingpagehomeContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandingpageCards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "Image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LandingpageCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingTable" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "standard" "Status" NOT NULL,
    "premium" "Status" NOT NULL,
    "starter" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingCards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "subtitle2" TEXT NOT NULL,
    "price2" INTEGER NOT NULL,
    "packageone" TEXT NOT NULL,
    "packagetwo" TEXT NOT NULL,
    "packagethree" TEXT NOT NULL,
    "packagefour" TEXT NOT NULL,
    "packagefive" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutContent" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AboutContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FaqContent" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FaqContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutLocation" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "AboutLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutopeningHours" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "AboutopeningHours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutContact" (
    "id" SERIAL NOT NULL,
    "simcardandnumber" TEXT NOT NULL,

    CONSTRAINT "AboutContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutGcash" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "AboutGcash_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutEmail" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "AboutEmail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_companyName_key" ON "User"("companyName");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
